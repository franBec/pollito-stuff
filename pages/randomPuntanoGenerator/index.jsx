import Layout from '../../components/_utils/layout'
import LoadingAnimation from '../../components/_utils/loadingAnimation'
import Form from '../../components/randomPuntanoGenerator/form'
import Puntano from '../../components/randomPuntanoGenerator/puntano'
import { useCallback, useEffect, useState } from 'react'
import PrintErrors from '../../components/_utils/printErrors'

import { server } from '../../lib/server'
import { toast } from 'react-hot-toast'

const RandomPuntanoGenerator = () => {
  const [puntano, setPuntano] = useState({
    success: false,
    errors: [],
    data: {
      firstName: '',
      lastName: '',
      gender: '',
      age: 18,
      birthday: '',
      dni: '',
      cuit: '',
      address: {
        isAddressSimulationEnabled: false,
        address: '',
        coords: '',
      },
    },
  })
  const [getNewPhoto, setGetNewPhoto] = useState(true)

  /*
   * Make a new puntano
   */

  const makeNewPuntano = useCallback(async (form) => {
    toast.promise(toastNewPuntano(form), {
      loading: 'Loading',
      success: 'Putano created!',
      error: 'Something went wrong',
    })
  }, [])

  //prettier-ignore
  const toastNewPuntano = async (form) => {
    try {
      var apiKey = process.env.NEXT_PUBLIC_NewPuntano_apiKey || ''
      var gender = form?.gender || ''
      var age = form?.age || 18

      const res = await fetch(`${server}api/randomPuntanoGenerator/newPuntano?apiKey=${apiKey}&gender=${gender}&age=${age}`)
      const resjson = await res.json()
      setPuntano(resjson)
      setGetNewPhoto((prev) => !prev)
    } catch (error) {
      setPuntano({ errors: [error.toString()] })
    }
  }

  useEffect(() => {
    makeNewPuntano()
  }, [makeNewPuntano])

  return (
    <Layout
      headTittle="Pollito's stuff | Random Puntano Generator"
      navTitle={'Random Puntano Generator 🦙'}
      introDescriptionRows={['Something/Someone from San Luis.']}
      introSignature="Pollito, a not puntano defining a puntano"
      isThisHome={false}
      introHref="https://en.wikipedia.org/wiki/San_Luis,_Argentina"
    >
      <div className="container rounded-md bg-slate-800 bg-opacity-80 px-5 py-1">
        <Form makeNewPuntano={makeNewPuntano} />
        <div className="p-3">
          <div className="w-full border border-slate-200"></div>
        </div>

        <Puntano puntano={puntano.data} getNewPhoto={getNewPhoto} />

        {puntano.errors?.length > 0 && !puntano.success && (
          <PrintErrors
            errors={puntano.errors}
            fileName="pages/randomPuntanoGenerator/index.jsx"
          />
        )}
      </div>
    </Layout>
  )
}

export default RandomPuntanoGenerator

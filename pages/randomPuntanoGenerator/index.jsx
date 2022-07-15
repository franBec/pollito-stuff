import { useCallback, useEffect, useState } from 'react'
import { server } from '../../lib/server'
import { toast } from 'react-hot-toast'

import Form from '../../components/randomPuntanoGenerator/form'
import Puntano from '../../components/randomPuntanoGenerator/puntano'
import PrintErrors from '../../components/_utils/printErrors'
import Hr from '../../components/_utils/hr'

import LayoutMetadata from '../../components/layout/config/randomPuntanoGenerator'

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
    <>
      <LayoutMetadata />
      <div className="container rounded-md bg-slate-800 bg-opacity-80 px-5 py-1">
        <Form makeNewPuntano={makeNewPuntano} />
        <Hr padding={3} />

        <Puntano puntano={puntano.data} getNewPhoto={getNewPhoto} />

        {puntano.errors?.length > 0 && !puntano.success && (
          <PrintErrors
            errors={puntano.errors}
            fileName="pages/randomPuntanoGenerator/index.jsx"
          />
        )}
      </div>
    </>
  )
}

export default RandomPuntanoGenerator

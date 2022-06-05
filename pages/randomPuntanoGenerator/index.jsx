import Layout from '../../components/_utils/layout'
import LoadingAnimation from '../../components/_utils/loadingAnimation'
import DisplayError from '../../components/_utils/displayError'
import Form from '../../components/randomPuntanoGenerator/form'
import Puntano from '../../components/randomPuntanoGenerator/puntano'
import { useCallback, useEffect, useState } from 'react'
import newPuntano from '../../components/randomPuntanoGenerator/newPuntano'

const RandomPuntanoGenerator = () => {
  const [puntano, setPuntano] = useState({
    loading: true,
  })

  /*
   * Make a new puntano
   */
  const makeNewPuntano = useCallback(async (form) => {
    try {
      setPuntano(await newPuntano(form?.gender || '', form?.age || 18))
    } catch (error) {
      setPuntano({ error: error.toString() })
    }
  }, [])

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
        {puntano.error ? (
          <DisplayError errorMessage={error} />
        ) : puntano.loading ? (
          <LoadingAnimation />
        ) : (
          <Puntano puntano={puntano} />
        )}
      </div>
    </Layout>
  )
}

export default RandomPuntanoGenerator

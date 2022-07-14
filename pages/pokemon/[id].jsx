import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-hot-toast'

import Layout from '../../components/_utils/layout'
import LoadingAnimation from '../../components/_utils/loadingAnimation'
import PrintErrors from '../../components/_utils/printErrors'

import CardDetail from '../../components/pokemon/cardDetail'

export default () => {
  const router = useRouter()

  const [data, setData] = useState(null)
  const [errors, setErrors] = useState([])

  const fetchPokemonData = useCallback(async (id) => {
    toast.promise(toastNewPokemon(id), {
      loading: 'Loading',
      success: 'Pokemon obtained!',
      error: 'Something went wrong',
    })
  }, [])

  const toastNewPokemon = async (id) => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      const resjson = await res.json()
      setData(resjson)
    } catch (error) {
      setErrors([error.toString()])
      throw new Error("Couldn'nt find pokemon")
    }
  }

  useEffect(() => {
    if (router.isReady) {
      fetchPokemonData(router?.query?.id)
    }
  }, [router.isReady])

  return (
    <Layout
      headTittle="Pollito's stuff | Pokemon"
      navTitle={'Pokemon 🕹️'}
      introDescriptionRows={['El Equipo Rocket ha sido vencido otra vez']}
      introSignature="The rocket team, in Spanich Latin dub"
      introHref="https://youtu.be/GB1bEnXjqQc"
      isThisHome={false}
      backHref={'/pokemon'}
    >
      <div className="flex place-content-center">
        {!data ? (
          !errors.length ? (
            <LoadingAnimation />
          ) : (
            <PrintErrors errors={errors} fileName="pages/pokemon/[id].jsx" />
          )
        ) : (
          <>
            <CardDetail data={data} />
          </>
        )}
      </div>
    </Layout>
  )
}

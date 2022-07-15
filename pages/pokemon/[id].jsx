import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-hot-toast'

import LoadingAnimation from '../../components/_utils/loadingAnimation'
import PrintErrors from '../../components/_utils/printErrors'

import CardDetail from '../../components/pokemon/cardDetail'
import LayoutMetadata from '../../components/layout/config/pokemon/id'

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
    <>
      <LayoutMetadata />
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
    </>
  )
}

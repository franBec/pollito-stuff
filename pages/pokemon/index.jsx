import Layout from '../../components/_utils/layout'
import CardSimple from '../../components/pokemon/cardSimple'
import PrintErrors from '../../components/_utils/printErrors'
import LoadingAnimation from '../../components/_utils/loadingAnimation'
import PaginateNavbar from '../../components/_utils/pagination/paginateNavbar'

import { useState } from 'react'
import useSWRImmutable from 'swr/immutable'

const index = () => {
  const [currentPage, updateCurrentPage] = useState(1)
  const shouldUpdatePageNumber = (number) => {
    if (
      number > 0 &&
      number <= data?.metadata?.totalPages &&
      number != currentPage
    ) {
      updateCurrentPage(number)
    }
  }

  //filter
  const [searchText, setSearchText] = useState('')
  const filterPokemons = (e) => {
    setSearchText(e.target.value)
  }

  const fetchPokemons = async (url) => {
    const res = await fetch(url)
    const resjson = await res.json()
    if (!resjson.success) {
      const error = new Error(resjson.errors.toString())
      throw error
    }

    return resjson
  }

  const { data, error } = useSWRImmutable(
    `/api/pokemon?name=${searchText}&page=${currentPage}`,
    fetchPokemons
  )

  return (
    <Layout
      headTittle="Pollito's stuff | Pokemon"
      navTitle={'Pokemon 🕹️'}
      introDescriptionRows={['Pues yo prefiero los tamales verdes']}
      introSignature="James in Spanish Latin dub"
      introHref="https://youtu.be/LR9vfQ1J2M4"
      isThisHome={false}
    >
      <div className="flex justify-center">
        <div className="my-6">
          <input
            type="text"
            placeholder="Search a pokemon..."
            className="text-black"
            value={searchText}
            onChange={(e) => filterPokemons(e)}
          />
        </div>
      </div>

      <>
        {error ? (
          <PrintErrors errors={[error]} fileName="pages/pokemon/index.jsx" />
        ) : !data ? (
          <LoadingAnimation />
        ) : (
          <>
            <div className="grid grid-cols-4 gap-4">
              {data?.data?.map((it) => (
                <CardSimple key={it.url} name={it.name} url={it.url} />
              ))}
            </div>
            <div className="mt-4">
              <PaginateNavbar
                currentPage={data?.metadata?.page}
                totalPages={data?.metadata?.totalPages}
                handleClick={shouldUpdatePageNumber}
              />
            </div>
          </>
        )}
      </>
    </Layout>
  )
}

export default index

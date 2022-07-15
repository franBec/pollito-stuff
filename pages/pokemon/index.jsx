import PrintErrors from '../../components/_utils/printErrors'
import LoadingAnimation from '../../components/_utils/loadingAnimation'

import { useState } from 'react'
import useSWRImmutable from 'swr/immutable'
import LayoutMetadata from '../../components/layout/config/pokemon'

import ResultGrid from '../../components/pokemon/resultGrid'
import Filter from '../../components/pokemon/filter'
import NotFound from '../../components/pokemon/notFound'

const index = () => {
  //pagination
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
  const [filter, setFilter] = useState({ name: '', sort: 'id_asc' })

  const updateFilter = (filterUpdated) => {
    setFilter(filterUpdated) //useSWRImmutable detects a change and re-trigger
  }

  const fetchPokemons = async (url) => {
    const res = await fetch(url)
    const resjson = await res.json()
    if (!resjson.success && res.status != 404) {
      throw new Error(resjson.errors)
    }
    return resjson
  }

  const { data, error } = useSWRImmutable(
    `/api/pokemon?name=${filter.name}&sort=${filter.sort}&page=${currentPage}&limit=9`,
    fetchPokemons
  )

  return (
    <>
      <LayoutMetadata />
      <Filter updateFilter={updateFilter} />

      <>
        {error ? (
          <PrintErrors errors={[error]} fileName="pages/pokemon/index.jsx" />
        ) : !data ? (
          <LoadingAnimation />
        ) : (
          <>
            {data?.data?.length ? (
              <ResultGrid
                data={data}
                shouldUpdatePageNumber={shouldUpdatePageNumber}
              />
            ) : (
              <NotFound name={filter.name} />
            )}
          </>
        )}
      </>
    </>
  )
}

export default index

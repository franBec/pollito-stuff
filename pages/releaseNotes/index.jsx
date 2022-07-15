import LoadingAnimation from '../../components/_utils/loadingAnimation'
import Table from '../../components/releaseNotes/table'
import { useEffect, useState } from 'react'
import PrintErrors from '../../components/_utils/printErrors'
import LayoutMetadata from '../../components/layout/config/releaseNotes'

const index = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const resBranches = await fetch(
        'https://api.github.com/repos/franBec/pollito-stuff/branches'
      )
      const dataBranches = await resBranches.json()
      const sha = dataBranches[0].commit.sha

      const resCommits = await fetch(
        `https://api.github.com/repos/franBec/pollito-stuff/commits?per_page=0&sha=${sha}`
      )
      const dataCommits = await resCommits.json()
      setData(dataCommits)
    }

    try {
      fetchData()
    } catch (err) {
      setError(err.toString())
    }
  }, [])
  return (
    <>
      <LayoutMetadata />
      {error ? (
        <PrintErrors errors={[error]} fileName="pages/releaseNotes/index.jsx" />
      ) : !data ? (
        <LoadingAnimation />
      ) : (
        <Table data={data} />
      )}
    </>
  )
}

export default index

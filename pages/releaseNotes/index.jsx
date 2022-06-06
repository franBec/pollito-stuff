import Layout from '../../components/_utils/layout'
import DisplayError from '../../components/_utils/displayError'
import LoadingAnimation from '../../components/_utils/loadingAnimation'
import Table from '../../components/releaseNotes/table'
import { useEffect, useState } from 'react'

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
    <Layout
      headTittle="Pollito's stuff | Releases"
      navTitle={'Releases 📒'}
      introDescriptionRows={[
        'Do not expect fully detailed release notes',
        'Is just a place to check what has been happening lately around here',
      ]}
      introSignature="Pollito, trying to keep an order in this page"
      isThisHome={false}
      introHref="https://en.wikipedia.org/wiki/Release_notes"
    >
      {error ? (
        <DisplayError errorMessage={error} />
      ) : !data ? (
        <LoadingAnimation />
      ) : (
        <Table data={data} />
      )}
    </Layout>
  )
}

export default index

import Layout from '../../components/_utils/layout'
import useSWRImmutable from 'swr/immutable'
import DisplayError from '../../components/_utils/displayError'
import LoadingAnimation from '../../components/_utils/loadingAnimation'
import Table from '../../components/releaseNotes/table'

const index = () => {
  const gitCommitsURL =
    'https://api.github.com/repos/franBec/pollito-stuff/commits?per_page=0&sha=bcaa1d1243030ce39ec47b588da18d1ce8367745'
  const fetcher = (url) => fetch(url).then((res) => res.json())

  const { data, error } = useSWRImmutable(gitCommitsURL, fetcher)

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

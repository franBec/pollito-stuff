import CardSimple from './cardSimple'
import PaginateNavbar from '../_utils/pagination/paginateNavbar'

const ResultGrid = ({ data, shouldUpdatePageNumber }) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
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
  )
}

export default ResultGrid

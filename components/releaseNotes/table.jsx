import { useState } from 'react'
import PaginateNavbar from '../_utils/pagination/paginateNavbar'

const Table = ({ data }) => {
  const itPerPage = 5
  const totalPages = Math.floor(data.length / itPerPage) + 1
  const [currentPage, updateCurrentPage] = useState(1)
  const shouldUpdatePageNumber = (number) => {
    if (number > 0 && number <= totalPages && number != currentPage) {
      updateCurrentPage(number)
    }
  }

  return (
    <div className="container rounded-md bg-slate-800 bg-opacity-80 p-5">
      <table className="table-fix w-full">
        <thead>
          <tr className="bg-slate-600 bg-opacity-50">
            {/* dividing in twelves is so bootstrap */}
            <th className="w-2/12 border px-4 py-3"># Commit</th>
            <th className="w-2/12 border px-4 py-3">Date</th>
            <th className="w-8/12 border px-4 py-3">Details</th>
          </tr>
        </thead>
        <tbody>
          {data
            .slice((currentPage - 1) * itPerPage, currentPage * itPerPage)
            .map((it, index) => (
              <tr>
                <td className="border px-4 py-3 text-center">
                  {data.length - index - (currentPage - 1) * itPerPage}
                </td>
                <td className="border px-4 py-3 text-center">
                  {it.commit?.author?.date.split('T')[0] ?? '-'}
                </td>
                <td className="border px-4 py-3">
                  {it.commit?.message ?? '-'}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="mt-2">
        <PaginateNavbar
          currentPage={currentPage}
          totalPages={totalPages}
          handleClick={shouldUpdatePageNumber}
        />
      </div>
    </div>
  )
}

export default Table

import FadeIn from '../_utils/fadeIn'
import Item from './item'
import PaginateNavbar from '../_utils/pagination/paginateNavbar'

const List = ({ data, crudUpdate, crudDelete, handleClick }) => {
  return (
    <>
      <div>
        <ul>
          {data.docs?.map((it, index) => (
            <FadeIn delay={300 + index * 100} duration={1000} key={it._id}>
              <Item data={it} crudUpdate={crudUpdate} crudDelete={crudDelete} />
            </FadeIn>
          ))}
        </ul>
      </div>

      <div className="my-2">
        <PaginateNavbar
          currentPage={data.page}
          totalPages={data.totalPages}
          handleClick={handleClick}
        />
      </div>
    </>
  )
}

export default List

const OrderByCreated = ({ currentSort, handleClick }) => {
  return (
    <button
      className={
        'rounded bg-gray-800 py-2 px-3 leading-tight text-gray-400 hover:bg-gray-700 hover:text-white'
      }
      onClick={() => handleClick(currentSort === 'asc' ? 'desc' : 'asc')}
    >
      <b>Sorted by:</b> created {currentSort}
    </button>
  )
}

export default OrderByCreated

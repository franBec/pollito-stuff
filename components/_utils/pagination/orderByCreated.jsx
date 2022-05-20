const OrderByCreated = ({ currentSort, handleClick }) => {
  return (
    <button
      className={
        'rounded border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 opacity-80 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
      }
      onClick={() => handleClick(currentSort === 'asc' ? 'desc' : 'asc')}
    >
      Sorted by: created {currentSort}
    </button>
  )
}

export default OrderByCreated

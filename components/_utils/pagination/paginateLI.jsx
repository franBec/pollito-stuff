const PaginateLI = ({ number, isOn, handleClick }) => {
  return (
    <li
      className={
        isOn
          ? 'z-10 border border-blue-300 bg-blue-50 py-2 px-3 leading-tight text-blue-600 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
          : 'border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
      }
      onClick={() => handleClick(number)}
    >
      {number}
    </li>
  )
}

export default PaginateLI

import Link from 'next/link'
import { FaLessThan } from 'react-icons/fa'

const HomeButton = () => {
  return (
    <footer>
      <Link href="/">
        <button className="flex items-center rounded bg-gray-800 py-3 px-4 text-base leading-tight text-gray-400 hover:bg-gray-700 hover:text-white">
          <div>
            <FaLessThan className="mr-2" />
          </div>
          <div>Go home</div>
        </button>
      </Link>
    </footer>
  )
}

export default HomeButton

import FadeIn from './fadeIn'
import Link from 'next/link'
import { FaLessThan } from 'react-icons/fa'

const HomeButton = () => {
  return (
    <FadeIn delay={0} duration={1500}>
      <footer>
        <Link href="/">
          <button className="flex items-center rounded bg-gray-800 py-3 px-4 text-lg leading-tight text-gray-400 hover:bg-gray-700 hover:text-white">
            <div>
              <FaLessThan className="mr-2" />
            </div>
            <div>Go home</div>
          </button>
        </Link>
      </footer>
    </FadeIn>
  )
}

export default HomeButton

import Link from 'next/link'
import { FaGreaterThan } from 'react-icons/fa'

const Navbar = ({ pageText }) => {
  return (
    <nav className="fixed top-0 mr-6 flex w-full flex-wrap items-center bg-gradient-to-r from-slate-800 to-sky-900 py-4 px-6 text-white shadow-md shadow-slate-400">
      <Link href="/">
        <a className="text-xl font-semibold tracking-tight">
          Pollito's Stuff 🐤
        </a>
      </Link>
      {pageText && (
        <>
          <FaGreaterThan className="mx-5" />
          <span className="text-xl font-semibold tracking-tight">
            {pageText}
          </span>
        </>
      )}
    </nav>
  )
}

export default Navbar

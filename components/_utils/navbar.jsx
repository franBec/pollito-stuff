import Link from 'next/link'
import { FaGreaterThan } from 'react-icons/fa'

const Navbar = ({ pageText }) => {
  return (
    <nav class="flex flex-wrap items-center justify-between bg-opacity-80 bg-gradient-to-r from-slate-800 to-sky-900 py-4 px-6">
      <div class="mr-6 flex flex-shrink-0 items-center text-white">
        <Link href="/">
          <a class="text-xl font-semibold tracking-tight">Pollito's Stuff 🐤</a>
        </Link>
        {pageText && (
          <>
            <FaGreaterThan className="mx-5" />
            <span class="text-xl font-semibold tracking-tight">{pageText}</span>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar

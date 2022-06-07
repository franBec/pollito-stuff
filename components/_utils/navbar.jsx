import Link from 'next/link'
import { FaGreaterThan } from 'react-icons/fa'

const Navbar = ({ pageText }) => {
  const version = process.env.NEXT_PUBLIC_VERSION
  return (
    <nav className="fixed top-0 mr-6 flex w-full flex-wrap items-center justify-between bg-gradient-to-r from-slate-800 to-sky-900 py-4 px-6 text-white shadow-md shadow-slate-400">
      <div className="flex flex-row items-center justify-start">
        <div>
          <Link href="/">
            <a className="text-xl font-semibold">Pollito's Stuff 🐤</a>
          </Link>
        </div>
        {pageText && (
          <>
            <div className="">
              <FaGreaterThan className="mx-2" />
            </div>
            <div>
              <span className="text-xl font-semibold">{pageText}</span>
            </div>
          </>
        )}
      </div>
      <div className="">
        <Link href="/releaseNotes">
          <a className="text-sm">Version {version}</a>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar

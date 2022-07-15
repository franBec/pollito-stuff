import Link from 'next/link'
import { FaGreaterThan } from 'react-icons/fa'
import { useNavbarBreadcrumb } from '../../zustand/layoutStore'

import { Fragment } from 'react'

const Navbar = () => {
  const version = process.env.NEXT_PUBLIC_VERSION
  const breadArray = useNavbarBreadcrumb((state) => state.get_array)
  return (
    <nav className="fixed top-0 mr-6 flex w-full flex-wrap items-center justify-between bg-gradient-to-r from-slate-800 to-sky-900 py-4 px-6 text-white shadow-md shadow-slate-400">
      <div className="flex flex-row items-center justify-start">
        <div>
          <Link href="/">
            <a className="text-xl font-semibold">Pollito's Stuff 🐤</a>
          </Link>
        </div>
        {breadArray.map((it, i) => (
          <Fragment key={i}>
            <div>
              <FaGreaterThan className="mx-2" />
            </div>
            <div>
              {it.url ? (
                <Link href={it.url}>
                  <a>
                    <span className="text-xl font-semibold">{it.text}</span>
                  </a>
                </Link>
              ) : (
                <span className="text-xl font-semibold">{it.text}</span>
              )}
            </div>
          </Fragment>
        ))}
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

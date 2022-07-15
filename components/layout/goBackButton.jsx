import Link from 'next/link'
import { FaLessThan } from 'react-icons/fa'
import { useGoBackButton } from '../../zustand/layoutStore'

const GoBackButton = () => {
  const redirect = useGoBackButton((state) => state.get_redirect)

  return (
    redirect && (
      <button className="rounded bg-gray-800 text-base leading-tight text-gray-400 hover:bg-gray-700 hover:text-white">
        <Link href={redirect ?? '/'}>
          <a>
            <div className="flex items-center py-2 px-3">
              <div>
                <FaLessThan className="mr-2" />
              </div>
              <div>Go Back</div>
            </div>
          </a>
        </Link>
      </button>
    )
  )
}

export default GoBackButton

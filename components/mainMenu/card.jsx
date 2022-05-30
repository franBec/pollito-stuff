//https://tailwind-starter-kit.vercel.app/docs/cards
//https://fontawesome.com/docs/web/style/size
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

const Card = ({ icon, title, description, goTo }) => {
  return (
    <Link href={goTo}>
      <a>
        <div className="max-w-xs overflow-hidden rounded-lg bg-white bg-opacity-50 shadow-lg hover:scale-105">
          <div className="mt-2 flex items-center justify-center">
            <FontAwesomeIcon
              icon={icon}
              className="fa-solid fa-5x text-gray-900"
            />
          </div>
          <div className="px-6 py-4">
            <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">
              {title}
            </h4>
            <p className="leading-normal text-gray-700">{description}</p>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default Card

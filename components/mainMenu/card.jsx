//https://tailwind-starter-kit.vercel.app/docs/cards
//https://fontawesome.com/docs/web/style/size
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

import CardLayout from '../_utils/card'

const Card = ({ icon, title, description, goTo }) => {
  return (
    <Link href={goTo}>
      <a>
        <CardLayout animate={true}>
          <div className="flex items-center justify-center p-4">
            <FontAwesomeIcon icon={icon} className="fa-solid fa-5x" />
          </div>
          <div className="px-6 py-4">
            <h4 className="mb-2 text-xl font-semibold tracking-tight">
              {title}
            </h4>
            <p className="leading-normal">{description}</p>
          </div>
        </CardLayout>
      </a>
    </Link>
  )
}

export default Card

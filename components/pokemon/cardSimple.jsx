import Link from 'next/link'
import Card from '../_utils/card'

import zeroPad from '../../lib/funcs/zeroPad'
import capitalize from '../../lib/funcs/capitalize'

const CardSimple = ({ name, url }) => {
  const getPokeId = (url) => url.split('/')[6]

  const getImgSrc = (id) => {
    return `/img/pokemons/${zeroPad(id, 3)}.png`
  }

  return (
    <Link href={`/pokemon/${getPokeId(url)}`}>
      <a>
        <Card animate={true}>
          <div className="flex items-center justify-center p-4">
            <img
              src={getImgSrc(getPokeId(url))}
              alt="pokemon"
              width={150}
            ></img>
          </div>
          <div className="px-6 py-4">
            <h4 className="mb-2 text-center text-xl font-semibold tracking-tight">
              {capitalize(name)}
            </h4>
          </div>
        </Card>
      </a>
    </Link>
  )
}

export default CardSimple

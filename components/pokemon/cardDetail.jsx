import Card from '../_utils/card'
import Hr from '../_utils/hr'

import { GiHealthNormal, GiBroadsword, GiCheckedShield } from 'react-icons/gi'
import { AiFillThunderbolt } from 'react-icons/ai'

import capitalize from '../../lib/funcs/capitalize'

const CardDetail = ({ data }) => {
  const getImgSrc = (name) => {
    return `https://img.pokemondb.net/sprites/home/normal/${name}.png`
  }

  const getWikiLink = (name) => {
    return `https://www.wikidex.net/wiki/${capitalize(name)}`
  }

  return (
    <Card>
      <div className="px-4 py-2">
        <div>
          {/* NAME */}
          <p className="py-4 text-center text-2xl font-bold uppercase">
            <a target="_blank" href={getWikiLink(data.name)}>
              {data.name}
            </a>
          </p>
          <Hr />
          {/* TYPES */}
          <div className="flex px-4 py-2">
            <div className="flex-none font-bold">Type</div>
            {data.types.map((it) => (
              <div className="flex-1 px-4 uppercase">{it?.type?.name}</div>
            ))}
          </div>
        </div>
        <Hr />
        {/* PIC */}
        <div className="">
          <img
            src={getImgSrc(data.name)}
            alt="pokemon"
            width={300}
            height={300}
          ></img>
        </div>
        <Hr />
        {/* STATS */}
        <div className="flex justify-evenly py-2">
          <p className="text-xl">
            <GiHealthNormal /> {data.stats[0]?.base_stat}
          </p>
          <p className="text-xl">
            <GiBroadsword /> {data.stats[1]?.base_stat}
          </p>
          <p className="text-xl">
            <GiCheckedShield /> {data.stats[2]?.base_stat}
          </p>
          <p className="text-xl">
            <AiFillThunderbolt /> {data.stats[5]?.base_stat}
          </p>
        </div>
        {/* ABILITIES */}
        <div>
          <p className="font-bold">Abilities</p>
          <ul className="list-inside list-disc px-4">
            {data.abilities.map((it, i) => (
              <li key={i}>{capitalize(it?.ability?.name)}</li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  )
}

export default CardDetail

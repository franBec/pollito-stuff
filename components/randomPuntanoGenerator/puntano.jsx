import PuntanoInfo from './puntanoInfo'
import Map from './map/map'
import Mapnt from './map/mapnt'
import ATagWithFormat from '../_utils/aTagWithFormat'
import randomInt from '../../lib/funcs/randomInt'
import castBirthday from '../../lib/funcs/castDateTo_dd_mm_yyyy'
import { useEffect, useState } from 'react'
import yn from 'yn'

const Puntano = ({ puntano, getNewPhoto }) => {
  const [imageUrl, setImageUrl] = useState('/img/defaultPhoto.png')
  const [birthday, setBirthday] = useState('-')
  useEffect(() => {
    //asking for gender prevent doing unnecesary stuff on page landing
    if (puntano.gender) {
      //fetch a photo
      setImageUrl(
        `https://fakeface.rest/thumb/view/${new Date().toISOString()}?minimum_age=${randomInt(
          Number(puntano.age) - 1,
          Number(puntano.age)
        )}&maximum_age=${randomInt(
          Number(puntano.age),
          Number(puntano.age) + 1
        )}${
          puntano.gender === 'M'
            ? '&gender=male'
            : puntano.gender === 'F'
            ? '&gender=female'
            : ''
        }`
      )

      //cast birthday to dd/mm/yyyy
      try {
        setBirthday(castBirthday(puntano.birthday))
      } catch (err) {
        setBirthday('-')
      }
    }
  }, [getNewPhoto])

  return (
    <>
      <div className="my-2">
        <div className="mx-auto w-fit">
          <p className="border-2 border-dashed p-2">
            The photo used is NOT a real person! is an AI made up face provided
            by{' '}
            <ATagWithFormat
              format="underline"
              text="fakeface rest"
              goto="https://hankhank10.github.io/fakeface/"
            />
          </p>
          <br />
          <div className="flex flex-row">
            <div>
              <img
                src={imageUrl}
                alt="random.jpg"
                width="200"
                height="200"
              ></img>
            </div>
            <div className="grow pl-2">
              <PuntanoInfo
                k={'NAME'}
                v={puntano.firstName + ' ' + puntano.lastName}
              />
              <PuntanoInfo
                k={'GENDER'}
                v={
                  puntano.gender === 'M'
                    ? 'Male'
                    : puntano.gender === 'F'
                    ? 'Female'
                    : '-'
                }
              />
              <PuntanoInfo k={'BIRTHDAY'} v={birthday} />
              <PuntanoInfo k={'DNI'} v={puntano.dni} />
              <PuntanoInfo k={'CUIT'} v={puntano.cuit} />
            </div>
          </div>

          {/* asking for gender prevents displaying the map error while loading the first puntano */}
          {puntano.gender && (
            <div className="py-2">
              {yn(process.env.NEXT_PUBLIC_RandomPuntanoGenerator_UseMaps) ? (
                puntano.address.address && (
                  <>
                    <PuntanoInfo k={'ADDRESS'} v={puntano.address.address} />
                    <div className="flex justify-center">
                      <div className="mt-2">
                        <Map markerPosition={puntano.address.coords} />
                      </div>
                    </div>
                  </>
                )
              ) : (
                <Mapnt />
              )}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Puntano

import PuntanoInfo from './puntanoInfo'
import DisplayError from '../_utils/displayError'
import Map from './map/map'
import Mapnt from './map/mapnt'
import ATagWithFormat from '../_utils/aTagWithFormat'
import randomInt from '../../lib/funcs/randomInt'
import { useEffect, useState } from 'react'

const Puntano = ({ puntano, getNewPhoto }) => {
  const [imageUrl, setImageUrl] = useState('/img/defaultPhoto.png')

  useEffect(() => {
    setImageUrl(
      `https://fakeface.rest/thumb/view/${new Date().toISOString()}?minimum_age=${randomInt(
        Number(puntano.age) - 3,
        Number(puntano.age)
      )}&maximum_age=${randomInt(
        Number(puntano.age),
        Number(puntano.age) + 3
      )}${
        puntano.gender === 'M'
          ? '&gender=male'
          : puntano.gender === 'F'
          ? '&gender=female'
          : ''
      }`
    )
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
                    : 'Indefinite'
                }
              />
              <PuntanoInfo k={'BIRTHDAY'} v={puntano.birthday} />
              <PuntanoInfo k={'DNI'} v={puntano.dni} />
              <PuntanoInfo k={'CUIT'} v={puntano.cuit} />
            </div>
          </div>
          <div className="py-2">
            {puntano.address.isAddressSimulationEnabled ? (
              puntano.address.addressError ? (
                <DisplayError errorMessage={puntano.address.addressError} />
              ) : (
                <>
                  <PuntanoInfo k={'ADDRESS'} v={puntano.address.address} />
                  <div className="flex justify-center">
                    <div>
                      <Map markerPosition={puntano.address.coords} />
                    </div>
                  </div>
                </>
              )
            ) : (
              <Mapnt />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Puntano

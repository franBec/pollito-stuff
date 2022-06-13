// https://www.npmjs.com/package/@react-google-maps/api
import LoadingAnimation from '../../_utils/loadingAnimation'
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  Polygon,
} from '@react-google-maps/api'
import { useState, useCallback } from 'react'
import styles from './styles'
import polygonGeoJson from './sanLuisGeoJson'
import PrintErrors from '../../_utils/printErrors'

const containerStyle = {
  width: '500px',
  height: '500px',
}

const options = {
  styles: styles, //give it some color
  disableDefaultUI: true, //get rid of all UI
  zoomControl: true, //leave the zoom stuff available
}

const Map = ({ markerPosition }) => {
  const [map, setMap] = useState(null)
  const [zones, setZones] = useState([])

  const polygonPoints = polygonGeoJson.geometries[0].coordinates[0]

  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_mapsApiKey,
  })

  const onLoad = useCallback(function callback(map) {
    //draw city boundaries
    setZones(
      polygonPoints.map((zone) => zone.map(([lng, lat]) => ({ lat, lng })))
    )

    //bounds, set where maps starts
    const bounds = new window.google.maps.LatLngBounds()
    polygonPoints.map((zone) =>
      zone.map(([lng, lat]) => bounds.extend({ lat, lng }))
    )
    map.fitBounds(bounds)

    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  return (
    <>
      {loadError ? (
        <PrintErrors
          errors={['Something went wrong with Google Maps']}
          fileName="components/randomPuntanoGenerator/map.jsx"
        />
      ) : !isLoaded ? (
        <LoadingAnimation />
      ) : (
        <>
          <GoogleMap
            mapContainerStyle={containerStyle}
            defaultCenter={markerPosition}
            zoom={15}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={options}
          >
            {/* Child components, such as markers, info windows, etc. */}
            <Marker position={markerPosition} />

            {zones.map((zone) => (
              <Polygon path={zone} key={zone} />
            ))}
          </GoogleMap>
        </>
      )}
    </>
  )
}

export default Map

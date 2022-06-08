import { useState } from 'react'
import useEventListener from '@use-it/event-listener'

const useKeyDown = () => {
  const [coords, setCoords] = useState([0, 0])
  useEventListener(
    'mousemove',
    ({ clientX, clientY }) => {
      setCoords([clientX, clientY])
    },
    { passive: true }
  )
  return coords
}

export default useKeyDown

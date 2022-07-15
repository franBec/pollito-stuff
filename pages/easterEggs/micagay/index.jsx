import { useState } from 'react'
import useSound from 'use-sound'
import LayoutMetadata from '../../../components/layout/config/easterEggs/micagay'

const index = () => {
  const yesImGay = "Yes, I'm gay"
  const no = 'NO'

  const [gayBtn, setGayBtn] = useState('right')

  const soundUrl = '/sfx/shock.mp3'
  const [play, { stop }] = useSound(soundUrl, { volume: 0.5 })

  const [isHovering, setIsHovering] = useState(false)

  const handleMouseIn = (leftRight) => {
    setGayBtn(leftRight)
    setIsHovering(true)
    play()
  }

  const handleMouseOut = () => {
    setIsHovering(false)
    stop()
  }

  return (
    <>
      <LayoutMetadata />
      <div className="flex flex-col items-center">
        <div>
          <img
            src="/img/easterEggs/micagay/the-rock.gif"
            alt="gif"
            width="200"
          />
        </div>

        <div className="mt-2 w-60 overflow-hidden bg-white shadow-lg">
          <div className="px-6 py-4">
            <h4 className="mb-3 text-center text-xl font-semibold tracking-tight text-black">
              ARE YOU GAY?
            </h4>
            <div className="flex justify-between text-black">
              <a href="https://youtu.be/ajlkhFnz8eo" target="_blank">
                <button
                  className="border border-black bg-slate-300 p-2"
                  onMouseEnter={(e) => handleMouseIn('left')}
                  onMouseLeave={handleMouseOut}
                >
                  {gayBtn == 'left' ? yesImGay : no}
                </button>
              </a>
              <a href="https://youtu.be/ajlkhFnz8eo" target="_blank">
                <button
                  className="border border-black bg-slate-300 p-2"
                  onMouseEnter={(e) => handleMouseIn('right')}
                  onMouseLeave={handleMouseOut}
                >
                  {gayBtn == 'right' ? yesImGay : no}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default index

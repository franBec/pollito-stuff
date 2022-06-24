import { useState, useCallback, useEffect } from 'react'
import { toast } from 'react-hot-toast'
import Layout from './../components/_utils/layout'
import PrintErrors from '../components/_utils/printErrors'

const NotFound = () => {
  const [imageUrl, setImageUrl] = useState('/img/404/reload-cat.gif')
  const [text, setText] = useState('')
  const [buttonText, setButtonText] = useState('Get a new cat!')
  const [youGot, setYouGot] = useState("404'd!")
  const [wasAnError, setWasAnError] = useState(false)

  const fetchMichi = useCallback(async () => {
    toast.promise(toastMeAMichi(), {
      loading: 'Meow...?',
      success: 'Meow!',
      error: "Meown't :c",
    })
  }, [])

  const toastMeAMichi = async () => {
    try {
      const res = await fetch('https://api.thecatapi.com/v1/images/search')
      const resjson = await res.json()

      setWasAnError(false)
      setImageUrl(resjson[0].url)
      setText('But I found a cat for you! 🐈')
    } catch (error) {
      setWasAnError(true)
      setImageUrl('/img/404/what-confused.gif')
      setText(error.toString())
      throw error
    }
  }

  useEffect(() => {
    fetchMichi()
  }, [fetchMichi])

  const rickRoll = () => {
    setWasAnError(false)
    setImageUrl('/img/404/rickroll-roll.gif')
    setText('Never gonna give you up 🎵')
    setYouGot('rickrolled!')
    setButtonText('xd')
  }

  return (
    <Layout
      headTittle="Pollito's stuff | 404 Not found"
      navTitle={'404 Not Found 🐈‍⬛'}
      introDescriptionRows={[
        '404 /ˌfɔːr əʊ ˈfɔːr/ [noun]',
        'A message that appears on a computer screen that tells you that an internet address cannot be found',
      ]}
      introSignature="Definition of 404 from the Oxford Advanced Learner's Dictionary"
      introHref="https://www.oxfordlearnersdictionaries.com/definition/english/404#:~:text=404-,noun,internet%20address%20cannot%20be%20found"
      isThisHome={false}
    >
      <>
        <div className="container rounded-md bg-slate-800 bg-opacity-80 p-2">
          <div className="text-center">
            <div className="text-3xl">
              Oh no, you got{' '}
              <a
                href="https://youtu.be/VZrDxD0Za9I"
                target="_blank"
                onClick={() => rickRoll()}
              >
                {youGot}
              </a>
            </div>
            <div>The page you were looking couldn't be found</div>
          </div>

          <div className="my-2">
            <div className="w-full border-t border-slate-200"></div>
          </div>

          <div className="mt-2 flex justify-center">
            {wasAnError ? (
              <PrintErrors errors={[text]} />
            ) : (
              <p className="text-2xl">{text}</p>
            )}
          </div>

          <div className="mt-2 flex justify-center">
            <img src={imageUrl} alt="michi" width={500}></img>
          </div>

          <div className="mt-2 flex justify-center">
            <button
              onClick={() => fetchMichi()}
              className="rounded bg-sky-900 py-2 px-4 font-semibold text-white hover:bg-sky-700"
            >
              {buttonText}
            </button>
          </div>
        </div>
      </>
    </Layout>
  )
}

export default NotFound

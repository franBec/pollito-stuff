import FadeIn from './fadeIn'
import Link from 'next/link'

const HomeButton = () => {
  return (
    <FadeIn delay={0} duration={1500}>
      <footer>
        <Link href="/">
          <button
            style={{ backgroundColor: '#4f4f4f' }}
            className="decoration-none inline-block scale-100 cursor-pointer rounded border-none py-2.5 px-5 text-sm opacity-50 focus:outline-none active:transform"
          >
            Go home
          </button>
        </Link>
      </footer>
    </FadeIn>
  )
}

export default HomeButton

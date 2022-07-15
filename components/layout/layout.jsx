import Head from './head'
import Quote from './quote'
import GoBackButton from './goBackButton'
import FadeIn from './fadeIn'
import Navbar from './navbar'

import { Toaster } from 'react-hot-toast'

const Layout = ({ children }) => {
  return (
    <>
      <Head />

      {/* Toast notifications */}
      <Toaster position="top-center" reverseOrder={true} />

      <main className="mx-auto min-h-screen px-4 py-20 text-white xl:container">
        <FadeIn delay={0} duration={1500}>
          <Quote />
          {children}
          <footer className="mt-4">
            <GoBackButton />
          </footer>
        </FadeIn>
      </main>

      {/*Why navbar is delared here? https://stackoverflow.com/questions/72239346/next-js-image-always-on-top */}
      <Navbar />
    </>
  )
}

Layout.defaultProps = {
  headTittle: "Pollito's stuff",
  navTitle: '',
  introDescriptionRows: [],
  introSignature: '',
  introHref: '',
  isThisHome: false,
}

export default Layout

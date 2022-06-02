import Head from 'next/head'
import Intro from './intro'
import HomeButton from './homeButton'
import FadeIn from './fadeIn'
import { Toaster } from 'react-hot-toast'
import Navbar from './navbar'

const Layout = ({
  children,
  headTittle,
  navTitle,
  introDescriptionRows,
  introSignature,
  introHref,
  isThisHome,
}) => {
  return (
    <>
      <Head>
        <title>{headTittle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Toast notifications */}
      <Toaster position="top-center" reverseOrder={true} />

      <main className="mx-auto min-h-screen px-4 py-20 text-white xl:container">
        <FadeIn delay={0} duration={1500}>
          <Intro
            descriptionRows={introDescriptionRows}
            signature={introSignature}
            goTo={introHref}
          />
          {children}
          <div className="mt-4">{!isThisHome && <HomeButton />}</div>
        </FadeIn>
      </main>

      {/*Why navbar is delared here? https://stackoverflow.com/questions/72239346/next-js-image-always-on-top */}
      <Navbar pageText={navTitle} />
    </>
  )
}

Layout.defaultProps = { headTitle: 'Pollito Stuff' }

export default Layout

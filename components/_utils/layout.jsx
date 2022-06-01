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

      {/* Toaster shows pop up notifications, is kinda useful to say 'hey this is loading' */}
      <Toaster position="top-center" reverseOrder={true} />

      <div className="flex min-h-screen flex-col text-white">
        <Navbar pageText={navTitle} />
        <main className="container mx-auto flex-1 px-4 pt-8 text-left">
          <Intro
            descriptionRows={introDescriptionRows}
            signature={introSignature}
            goTo={introHref}
          />
          <FadeIn delay={500} duration={2000}>
            {children}
          </FadeIn>
        </main>
        {!isThisHome && <HomeButton />}
      </div>
    </>
  )
}

Layout.defaultProps = { headTitle: 'Pollito Stuff' }

export default Layout

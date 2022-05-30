import Head from 'next/head'
import Footer from './footer'
import Intro from './intro'
import HomeButton from './homeButton'
import FadeIn from './fadeIn'
import { Toaster } from 'react-hot-toast'

const Layout = ({
  children,
  headTittle,
  title,
  pretitle,
  descriptionRows,
  signature,
  displayHomeButton,
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
        <main className="container mx-auto flex-1 px-4 pt-8 text-left">
          <Intro
            title={title}
            pretitle={pretitle}
            descriptionRows={descriptionRows}
            signature={signature}
          />
          <FadeIn delay={500} duration={2000}>
            {children}
          </FadeIn>
        </main>
        {displayHomeButton && <HomeButton />}
        {/* <Footer /> */}
      </div>
    </>
  )
}

Layout.defaultProps = { headTitle: 'Pollito Stuff' }

export default Layout

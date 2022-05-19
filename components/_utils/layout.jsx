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
      <Toaster position="top-center" reverseOrder={true} />
      <div className="flex min-h-screen flex-col text-white">
        <main className="container mx-auto flex-1 px-6 pt-16 text-left">
          <Intro
            title={title}
            pretitle={pretitle}
            descriptionRows={descriptionRows}
            signature={signature}
          />
          <FadeIn delay={500} duration={2000}>
            {children}
          </FadeIn>
          {displayHomeButton && <HomeButton />}
        </main>
        <Footer />
      </div>
    </>
  )
}

Layout.defaultProps = { headTitle: 'Pollito Stuff' }

export default Layout

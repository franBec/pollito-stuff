import PersonalInfoCard from '../../components/about/personalInfoCard'
import AccordionItem from '../../components/_utils/accordion/accordionItem'
import { useState } from 'react'
import AboutMe from '../../components/about/aboutMe'
import AboutThisPage from '../../components/about/aboutThisPage'

import LayoutMetadata from '../../components/layout/config/about'

const index = () => {
  const [activeIndex, setActiveIndex] = useState(1)

  return (
    <>
      <LayoutMetadata />
      <div className="flex flex-col items-center justify-center">
        <AccordionItem
          title={'About me'}
          index={1}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <PersonalInfoCard />
          {/* <AboutMe /> */}
          <p className="bg-red-400">
            This page is currently abandoned. Please check me out in my blog{' '}
            <a
              href="https://pollitodev.netlify.app/en/page/about/"
              className="font-bold"
            >
              Pollito dev
            </a>
          </p>
        </AccordionItem>
        <AccordionItem
          title={'About this page'}
          index={2}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <AboutThisPage />
        </AccordionItem>
      </div>
    </>
  )
}

export default index

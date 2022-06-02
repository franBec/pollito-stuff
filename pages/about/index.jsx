import Layout from '../../components/_utils/layout'
import PersonalInfoCard from '../../components/about/personalInfoCard'
import AccordionItem from '../../components/_utils/accordion/accordionItem'
import { useState } from 'react'
import AboutMe from '../../components/about/aboutMe'
import AboutThisPage from '../../components/about/aboutThisPage'

const index = () => {
  const [activeIndex, setActiveIndex] = useState(1)

  return (
    <Layout
      headTittle="Pollito's stuff | About"
      navTitle={'About'}
      introDescriptionRows={['Oh, hi~']}
      introSignature="Nanashi Mumei"
      isThisHome={false}
      introHref="https://youtu.be/4NYsqm2E41k"
    >
      <div className="flex flex-col items-center justify-center">
        <AccordionItem
          title={'About me'}
          index={1}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <PersonalInfoCard />
          <AboutMe />
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
    </Layout>
  )
}

export default index

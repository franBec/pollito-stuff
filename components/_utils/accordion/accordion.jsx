//https://iwconnect.com/creating-a-fully-functional-accordion-component-with-react-js-and-tailwindcss/

import AccordionItem from './accordionItem'
import { useState } from 'react'

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <div className="flex flex-col items-center justify-center">
      <AccordionItem
        title={'Accordion 1 title'}
        index={1}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        Content of Accordion 1
      </AccordionItem>
      <AccordionItem
        title={'Accordion 2 title'}
        index={2}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        Content of Accordion 2
      </AccordionItem>
    </div>
  )
}

export default Accordion

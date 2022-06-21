//https://iwconnect.com/creating-a-fully-functional-accordion-component-with-react-js-and-tailwindcss/

import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from 'react-icons/bs'
import FadeIn from '../fadeIn'

const AccordionItem = ({
  title,
  children,
  index,
  activeIndex,
  setActiveIndex,
}) => {
  const handleSetIndex = (index) =>
    setActiveIndex(index == activeIndex ? 0 : index)
  return (
    <>
      <div
        onClick={() => handleSetIndex(index)}
        className="mt-2 flex w-full cursor-pointer justify-between rounded bg-gradient-to-r from-slate-800 to-sky-900 p-2"
      >
        <div className="flex">
          <div className="text-xl font-bold">{title}</div>
        </div>
        <div className="flex items-center justify-center">
          {activeIndex === index ? (
            <BsFillArrowUpCircleFill className="h-8 w-8" />
          ) : (
            <BsFillArrowDownCircleFill className="h-8 w-8" />
          )}
        </div>
      </div>

      {activeIndex === index && (
        <FadeIn delay={0} duration={1500}>
          <div className="shadow-3xl mb-6 rounded-2xl p-4 shadow-cyan-500/50">
            {children}
          </div>
        </FadeIn>
      )}
    </>
  )
}

export default AccordionItem

import FadeIn from './fadeIn'
const Intro = ({ title, pretitle, descriptionRows, signature }) => {
  return (
    <>
      <FadeIn delay={0} duration={1500}>
        <h2 className="text-2xl md:text-4xl lg:text-6xl ">{pretitle}</h2>
        <h1 className="mb-8 text-3xl font-black md:text-6xl lg:text-8xl">
          {title}
        </h1>
      </FadeIn>

      <FadeIn delay={500} duration={2000}>
        <div className="mx-auto mb-8 w-fit bg-white bg-opacity-5 py-2 px-4 text-lg md:py-4 md:px-10 md:text-2xl lg:py-6 lg:px-12 lg:text-3xl">
          {descriptionRows.map((it) => (
            <p className="italic" key={it}>
              {it}
              <br />
            </p>
          ))}
          <div className="text-right text-sm italic">~{signature}</div>
        </div>
      </FadeIn>
    </>
  )
}

export default Intro

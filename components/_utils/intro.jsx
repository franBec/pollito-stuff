import FadeIn from './fadeIn'
const Intro = ({ descriptionRows, signature, goTo }) => {
  return (
    <>
      {/* <FadeIn delay={0} duration={1500}>
        <h2 className="text-xl md:text-2xl lg:text-3xl ">{pretitle}</h2>
        <h1 className="mb-4 text-2xl font-bold md:text-3xl lg:text-4xl">
          {title}
        </h1>
      </FadeIn> */}

      <FadeIn delay={500} duration={2000}>
        <div className="mx-auto mb-4 w-fit bg-slate-900 bg-opacity-50 py-1 px-2 text-lg md:py-2 md:px-5 md:text-2xl lg:py-3 lg:px-6 lg:text-2xl">
          <a href={goTo} target="_blank">
            {descriptionRows.map((it) => (
              <p className="italic" key={it}>
                {it}
                <br />
              </p>
            ))}
            <div className="text-right text-base italic">~{signature}</div>
          </a>
        </div>
      </FadeIn>
    </>
  )
}

export default Intro

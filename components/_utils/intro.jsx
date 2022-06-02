const Intro = ({ descriptionRows, signature, goTo }) => {
  return (
    <>
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
    </>
  )
}

export default Intro

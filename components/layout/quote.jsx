import { useQuoteContainer } from '../../zustand/layoutStore'

const Quote = () => {
  const quoteLines = useQuoteContainer((state) => state.get_array)
  const quotee = useQuoteContainer((state) => state.get_quotee)
  const redirect = useQuoteContainer((state) => state.get_redirect)

  return (
    (quoteLines.length || quotee || redirect) && (
      <div className="mx-auto mb-4 w-fit bg-slate-900 bg-opacity-50 py-1 px-2 text-lg md:py-2 md:px-5 md:text-2xl lg:py-3 lg:px-6 lg:text-2xl">
        <a href={redirect} target="_blank">
          {quoteLines.map((it) => (
            <p className="italic" key={it}>
              {it}
              <br />
            </p>
          ))}
          <div className="text-right text-base italic">~{quotee}</div>
        </a>
      </div>
    )
  )
}

export default Quote

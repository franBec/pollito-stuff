import { BiError } from 'react-icons/bi'

const PrintErrors = ({ errors, fileName }) => {
  return (
    <div className="bg-red-500 bg-opacity-50 py-2 px-4">
      <p className="text-center text-2xl">
        Ou, something went wrong! <BiError className="inline-block" />
      </p>
      {fileName && (
        <p>
          caused in <span className="italic tracking-wide">{fileName}</span>
        </p>
      )}
      {errors.map((it) => (
        <li key={it}>{it}</li>
      ))}
    </div>
  )
}

export default PrintErrors

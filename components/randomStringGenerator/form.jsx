const Form = ({
  generateRandomString,
  allowedChars,
  setAllowedChars,
  lengthError,
  allowedLength,
  handleLenghtInputOnChange,
}) => {
  return (
    <form onSubmit={generateRandomString}>
      <div className="my-5">
        <label className="block">Allowed Chars</label>
        <input
          type="text"
          value={allowedChars}
          onChange={(e) => setAllowedChars(e.target.value)}
          placeholder="Leave empty to allow (A-Z, a-z, 0-9) chars to be used"
          className="h-8 w-full p-1 text-black"
        ></input>
      </div>
      <div className="my-5">
        <label className="block">
          Length{' '}
          {lengthError && (
            <label className="italic text-red-500">
              ~Length must be a positive integer between 1 and 1000!
            </label>
          )}
        </label>
        <input
          type="number"
          min="0"
          max="1000"
          step="1"
          value={allowedLength}
          onChange={(e) => handleLenghtInputOnChange(e)}
          placeholder="Set length"
          className="h-8 w-full p-1 text-black"
        ></input>
      </div>
      <div className="flex justify-center">
        <input
          type="submit"
          value="Generate!"
          className="rounded bg-sky-900 py-2 px-4 font-semibold text-white hover:bg-sky-700"
        ></input>
      </div>
    </form>
  )
}

export default Form

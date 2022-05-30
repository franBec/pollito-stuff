const PuntanoInfo = ({ k, v }) => {
  return (
    <div className="whitespace-no-wrap flex justify-between border bg-gray-50 px-4 py-2">
      <span className="text-sm font-bold uppercase text-black">{k}:</span>
      <span className="text-black">{v}</span>
    </div>
  )
}

export default PuntanoInfo

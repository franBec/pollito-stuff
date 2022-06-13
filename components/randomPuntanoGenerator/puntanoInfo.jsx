const PuntanoInfo = ({ k, v }) => {
  return (
    <div className="whitespace-no-wrap flex justify-between border bg-slate-800 bg-opacity-20 px-4 py-2">
      <span className="text-sm font-bold uppercase ">{k}:</span>
      <span className="">{v ?? ''}</span>
    </div>
  )
}

export default PuntanoInfo

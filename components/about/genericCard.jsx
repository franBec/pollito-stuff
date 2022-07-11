const GenericCard = ({ children, title }) => {
  return (
    <div className="mt-2 w-full overflow-hidden rounded-lg bg-slate-800 bg-opacity-80 shadow-lg">
      <div className="px-6 py-4">
        {title && (
          <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-200">
            # {title}
          </h4>
        )}
        {children}
      </div>
    </div>
  )
}

export default GenericCard

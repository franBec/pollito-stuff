const GenericCard = ({ children, title }) => {
  return (
    <div class="mt-2 w-full overflow-hidden rounded-lg bg-slate-800 bg-opacity-50 shadow-lg">
      <div class="px-6 py-4">
        <h4 class="mb-3 text-xl font-semibold tracking-tight text-gray-200">
          {title}
        </h4>
        {children}
      </div>
    </div>
  )
}

export default GenericCard

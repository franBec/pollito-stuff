const PrintBoxWithText = ({ text }) => {
  return (
    <div className="container my-2 mx-auto mb-8 w-fit bg-slate-900 bg-opacity-80 py-2 px-4 text-lg md:py-4 md:px-10 md:text-2xl lg:py-6 lg:px-12 lg:text-3xl">
      {text}
    </div>
  )
}

export default PrintBoxWithText

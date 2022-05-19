import React from 'react'

const DisplayError = ({ errorMessage }) => {
  return (
    <div className="mx-auto mb-8 w-fit bg-white bg-opacity-5 py-2 px-4 text-center text-lg md:py-4 md:px-10 md:text-2xl lg:py-6 lg:px-12 lg:text-3xl">
      {errorMessage}
    </div>
  )
}

export default DisplayError

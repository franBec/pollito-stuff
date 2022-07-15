import React from 'react'

const Container = ({ children }) => {
  return (
    <div className="container rounded-md bg-slate-900 bg-opacity-80 p-5">
      {children}
    </div>
  )
}

export default Container

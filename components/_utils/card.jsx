import React from 'react'

const Card = ({ animate, children }) => {
  return (
    <div
      className={`max-w-xs overflow-hidden rounded-lg bg-slate-900 bg-opacity-80 shadow-lg ${
        animate && 'transition duration-150 ease-in-out hover:scale-105'
      }`}
    >
      {children}
    </div>
  )
}

export default Card

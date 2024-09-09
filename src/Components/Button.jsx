import React, { Children } from 'react'

export default function Button({onClick , children ,className}) {
  return (
    <button 
        onClick={onClick}
        className={className}
    >
      {children}
    </button>
  )
}

import React from 'react'

export default function ToggleLightDark({children ,className}) {
  return (
    <button className={className}>{children}</button>
  )
}

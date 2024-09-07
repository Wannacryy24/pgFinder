import React from 'react'

export default function Image({ src, alt, width, height , className, onLoad, onError}) {
  return (
    <img 
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onLoad={onLoad}
      onError={onError}
    />
  )
}

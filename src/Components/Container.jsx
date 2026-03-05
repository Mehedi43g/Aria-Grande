import React from 'react'

const Container = ({className,children}) => {
  return (
    <div className={`max-w-7xl px-2 mx-auto ${className}`} >{children}</div>
  )
}

export default Container
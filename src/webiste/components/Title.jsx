import React from 'react'

const Title = ({heading}) => {
  return (
    <div className='container pt-4'>

      <h5 style={{color:"var(--blue)"}}> | {heading}</h5>
    </div>
  )
}

export default Title

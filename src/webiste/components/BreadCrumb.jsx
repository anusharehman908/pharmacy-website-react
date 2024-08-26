import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumb = ({heading}) => {
  return (
    <div className='container pt-4'>
      <h4>
        <span> <Link to="/" >Home </Link></span>
        <span style={{color:"var(--blue)"}}>
        > 
        </span>
        <span>
         &nbsp; {heading}
        </span>
     
      </h4>
    </div>
  )
}

export default BreadCrumb

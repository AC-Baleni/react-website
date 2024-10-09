import React from 'react'
import './Title.css'

const Title = ({ heading, subHeading }) => {
  return (
    <div className='title'>
        <h3>{heading}</h3>
        <p>{subHeading}</p>
    </div>
  )
}
export default Title

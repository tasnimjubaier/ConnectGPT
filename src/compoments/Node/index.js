import React from 'react'

import './index.css'


const Node = ({query, answer}) => {
  return (
    <div className='wrapper'>
      <div className='query'>
        {query}
      </div>
      <div className='answer'>
        {answer}
      </div>
    </div>
  )
}

export default Node
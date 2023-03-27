import React from 'react'
import "./index.css"

const Home = () => {


  const handleClick = (e) => {
    e.preventDefault();
    
  }

  return (
    <div className='wrapper'>
      <div className='navbar'> 
        <ul>
          <li>
            login
          </li>
          <li>
            signup
          </li>
        </ul>
      </div>
      <div className='content'>
        <button className='create' onClick={handleClick}>
          {"Create a Connection >"}
        </button>
      </div>
    </div>
  )
}

export default Home
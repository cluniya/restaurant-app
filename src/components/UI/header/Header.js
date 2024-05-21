import React from 'react'
import  './Header.css'
import mealsimg from './meals.jpg'
import HeaderCart from './HeaderCart'

const Header = () => {
  return (
    <>
      <div className='header'>
        <h2>ReactMeals</h2>
        <HeaderCart/>
      </div>

      <div className='main-image'>
        <img src={mealsimg}></img>
      </div>
    </>
  )
}

export default Header

import React from 'react'
import  './Header.css'
import mealsimg from '../Assest/meals.jpg'
import HeaderCart from './HeaderCart'
import MealsItem from '../Meals/MealsItem'

const Header = () => {
  return (
    <>
      <div className='header'>
        <h2>ReactMeals</h2>
        <HeaderCart/>
      </div>

      <div className='main-image' >
        <img src={mealsimg} alt='food image'></img>
      </div>
      
      <MealsItem/>
    </>
  )
}

export default Header

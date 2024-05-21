import React from 'react'
import  './Header.css'
import mealsimg from '../Assest/meals.jpg'
import HeaderCart from './HeaderCart'
import MealsSummary from '../Meals/MealsSummary'

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
      <MealsSummary />
    </>
  )
}

export default Header

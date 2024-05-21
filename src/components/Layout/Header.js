import React from 'react'
import  './Header.css'
import mealsimg from '../Assest/meals.jpg'
import HeaderCart from './HeaderCart'
import MealsItem from '../Meals/MealsItem'

const Header = (props) => {
  return (
    <>
      <div className='header'>
        <h2>ReactMeals</h2>
        <HeaderCart onClick={props.onShowCart}/>
      </div>

      <div className='main-image' >
        <img src={mealsimg} alt='food image'></img>
      </div>
      
      <MealsItem/>
    </>
  )
}

export default Header

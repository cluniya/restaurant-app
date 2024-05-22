import React from 'react'
import  classes from './Header.module.css'
import HeaderCart from './HeaderCart'
import MealsItem from '../Meals/MealsItem'
import mealsimg from '../../Assest/meals.jpg'
const Header = (props) => {
  return (
    <>
      <div className={classes.header}>
        <h2>ReactMeals</h2>
        <HeaderCart onClick={props.onShowCart}/>
      </div>

      <div className={classes['main-image']} >
        <img src={mealsimg} alt='food image'></img>
      </div>
      
      <MealsItem/>
    </>
  )
}

export default Header

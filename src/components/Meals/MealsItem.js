import React from 'react'
import './MealsItem.css'
import Meals from './Meals'
const MealsItem = (props) => {
  return (
    <div className='meals'>
      <h3>{props.name}</h3>
      <p className='description'>{props.des}</p>
      <h3 className='price'>{props.price}</h3>
    </div>
  )
}

export default MealsItem

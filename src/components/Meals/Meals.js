import React, { Fragment } from 'react'
import AvaibleMeals from './AvailableMeals'
import MealsSummary from './MealsSummary'
import MealItemForm from './MealsItem/MealItemForm'

const Meals = () => {
  return (
    <Fragment>
        <MealsSummary />
        
        <AvaibleMeals />
    </Fragment>
  )
}

export default Meals;

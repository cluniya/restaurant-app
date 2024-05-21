import React from 'react'
import './AvailableMeals.css';
import Card from '../UI/Card';
import MealItem from './MealsItem/MealItem';
const DUMMY_MEALS = [{
    id: 'm1',
    name: 'sushi',
    descryption: 'Finest Fish and Veggies',
    price: 22.99
},
{
    id: 'm2',
    name: 'sushi',
    descryption: 'Finest Fish and Veggies',
    price: 22.99
},
{
    id: 'm3',
    name: 'sushi',
    descryption: 'Finest Fish and Veggies',
    price: 22.99
}
]

const AvaibleMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => <MealItem key={meal.id}
        name={meal.name}
        descryption={meal.descryption}
        price={meal.price} />)
    return (
        <section className='meals'>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    )
}

export default AvaibleMeals

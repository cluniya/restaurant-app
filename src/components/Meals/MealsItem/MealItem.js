
import React, { useContext } from 'react'
import './MealItem.css'
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/Cart-context';
const MealItem = (props) => {
    const CartCtx = useContext(CartContext)
    const price = `${props.price.toFixed(2)}`
    
    const addToCartHandler = (amount) =>{
        CartCtx.addItem({
            id: props.id,
            name: props.name,
            amount : amount,
            price : props.price
        });
    }
    return(
        <li className='meal'>
                <div>
                    <h3>{props.name}</h3>
                    <div className='description'>{props.descryption}</div>
                    <div className='price'>${price}</div>
                </div>
                <div>
                    <MealItemForm onAddToCart={addToCartHandler} />

                </div>
        </li>
    );
}

export default MealItem

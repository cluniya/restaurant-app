import React, { useContext } from 'react'
import CartIcon from '../Cart/CartIcon'
import './HeaderCart.css'
import CartContext from '../../store/Cart-context'

const HeaderCart = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber,item)=>{
    return curNumber + item.amount;
  },0);

  return (
    <button className='button' onClick={props.onClick}>
        <span className='icon'><CartIcon/></span>
        <span>your cart</span>
        <span className='badge'>{numberOfCartItems}</span>
    </button>
      
  )
}

export default HeaderCart

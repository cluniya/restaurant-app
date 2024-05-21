import React from 'react'
import CartIcon from '../Cart/CartIcon'
import './HeaderCart.css'
const HeaderCart = (props) => {
  return (
    <button className='button' onClick={props.onClick}>
        <span className='icon'><CartIcon/></span>
        <span>your cart</span>
        <span className='badge'>2</span>
    </button>
      
  )
}

export default HeaderCart

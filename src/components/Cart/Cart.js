import React from 'react'
import './Cart.css'
import Modal from '../UI/Modal'
const Cart = (props) => {
    const cartItems = <ul className='cart-item'>{[{id: 'm1',
    name: 'sushi',
    descryption: 'Finest Fish and Veggies',
    price: 22.99}].map((items)=><li>{items.name}</li>)}</ul>
  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className='total'>
        <span> Total Amount</span>
        <span>35.62</span>
      </div>
      <div className='actions'>
        <button onClick={props.onHideCart} >Close</button>
        <button >Order</button>
      </div>
    </Modal>
  )
}

export default Cart

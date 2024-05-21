import React from 'react'
import './Cart.css'
import Modal from '../UI/Modal'
const Cart = () => {
    const cartItems = <ul className='cart-item'>{[{id: 'm1',
    name: 'sushi',
    descryption: 'Finest Fish and Veggies',
    price: 22.99}].map((items)=><li>{items.name}</li>)}</ul>
  return (
    <Modal>
      {cartItems}
      <div className='total'>
        <span> Total Amount</span>
        <span>35.62</span>
      </div>
      <div className='actions'>
        <button >Close</button>
        <button >Order</button>
      </div>
    </Modal>
  )
}

export default Cart

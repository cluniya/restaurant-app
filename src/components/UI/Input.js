import React from 'react'
import './Input.css'
const Input = React.forwardRef((props,ref) => {
  return <div className='input'>
    <label htmlFor={props.Input.id}>{props.label}</label>
    <input ref={ref} {...props.Input} />
  </div>
});

export default Input;

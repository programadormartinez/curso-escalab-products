import React from 'react'

import './App.css';
export default function Card(props) {
  return (
    <div className='product'> 
        <img src={props.image} alt='imagen' className='product-img'/>
        <p>{props.name}</p>
        <p>${props.cost}</p>
    </div>
  )
}

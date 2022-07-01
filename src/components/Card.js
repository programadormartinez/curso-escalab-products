import React from 'react'
import { Link } from 'react-router-dom';

import '../App.css';
export default function Card(props) {
  return (
    <div className='product'> 
        <img src={props.image} alt='imagen' className='product-img'/>
        <p>{props.name}</p>
        <p>${props.cost}</p>
        <Link to={`/details/${props.id}`} className='myButton'>Ver el producto</Link>
    </div>
  )
}

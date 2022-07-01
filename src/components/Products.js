import React, { useEffect, useState } from 'react'
import { LoadingSpinner } from '../utils/LoadingSpinner';
import Card from './Card';


const Products = () => {
    const [products, setProducts] = useState([]);
    async function getProducts() {
      await fetch('https://pg-delsur.herokuapp.com/products')
        .then(response => response.json())
        .then((data) => {
          setProducts(data.products);
        })
        .catch(error => console.log('Hubo un problema con la petición Fetch:' + error.message));
    }

    useEffect(()=> {
        getProducts()
    }, [])
  
  return (
    <div className='container'>
        <div className='products'>
            {
                products.length > 1 ? products?.map(product => {
                    return (
                        <Card name={product.name} id={product.id} cost={product.cost} key={product.id} image={product.image[0]}></Card>
                    );
                }): (<div>
                    <LoadingSpinner></LoadingSpinner>
                </div>)
            }
        </div>
    </div>
  )
}


export default Products;
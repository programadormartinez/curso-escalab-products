import React from 'react'
import Card from './Card';

export default function Products ({products}) {
  return (
    <div className='container'>
        <h1>
            Productos de Aldo Shop
        </h1>
        <hr />

        <div className='products'>
            {
                products.length > 1 ? products?.map(product => {
                    return (
                        <Card name={product.name} id={product.id} cost={product.cost} key={product.id} image={product.image[0]}></Card>
                    );
                }): console.log(products)
            }
        </div>
    </div>
  )
}

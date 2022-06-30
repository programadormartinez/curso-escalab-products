import logo from './logo.svg';
import { useEffect, useState } from 'react';
import Card from './Card';
import Products from './Products';



function App() {
  const [products, setProducts] = useState([]);
  async function getProducts() {
    await fetch('https://pg-delsur.herokuapp.com/products')
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data.products);
      })
      .catch(error => console.log('Hubo un problema con la petición Fetch:' + error.message));
  }

  useEffect(()=> {
    getProducts();
  }, []);



  return (
         <Products products={products}></Products>
  );
}

export default App;

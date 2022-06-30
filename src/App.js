import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Card from './Card';



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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        {/* {
          
          products.length > 1 ? products?.map(product => {
            return (
              <div className="item-details">
                <Card name={product.name} id={product.id}></Card>
              </div>
            )
          }): console.log(products)
        } */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import { useParams } from 'react-router-dom';
import { Navbar } from '../components/Navbar'
import { Product } from '../components/Product'
export const Details = () => {
  let { id } = useParams();
  return (
    <div>
      <Navbar></Navbar>
      <Product id={id}></Product>
    </div>
  )
}



import React, { useEffect, useState } from "react";
import { LoadingSpinner } from "../utils/LoadingSpinner";
import Card from "./Card";

export const Product = ({ id }) => {
  const [product, setProduct] = useState([]);
  async function getProduct() {
    await fetch(`https://pg-delsur.herokuapp.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      })
      .catch((error) =>
        console.log("Hubo un problema con la petición Fetch:" + error.message)
      );
  }

  useEffect(() => {
    getProduct();
  }, []);

  
  function RenderProduct(){
    if (product.id) {
        return (<Card
            name={product.name}
            id={product.id}
            cost={product.cost}
            key={product.id}
            image={product.image[0]}
          ></Card>);
    }else{
        return <LoadingSpinner></LoadingSpinner>
    }
  }
  
  return (
    <div>
      {RenderProduct()}
    </div>
  );
};

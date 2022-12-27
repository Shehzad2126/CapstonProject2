import axios from "axios";
import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import {Link} from 'react-router-dom'
import BarLoading from "../Loading/BarLoading"
function Products() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true);
    axios({
      method: "Get",
      url: "https://fakestoreapi.com/products",
    })
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
      }).then(()=>{setLoading(false)})
      .catch((e) => console.log(e));
      
  }, []);
  console.log(data);
  return (
    <div className="container">

      <h1 className=" my-4">Fresh recommendations</h1>
      {loading && <BarLoading/>}
      <div className="row d-flex">
        {data.map((product) => (
          
          <div className="col-md-6 col-lg-3  mb-4 mb-lg-0">
          <Link style={{textDecoration: 'none'}} to={`./view/`+product.id}>
            <ProductCard
              image={product.image}
              name={product.title}
              price={product.price}
              description={product.description}
            />
          </Link>
          </div>
          
        ))}
      </div>
    </div>
  );
}

export default Products;

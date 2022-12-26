import React, {useEffect, useState} from "react";
import axios from "axios";
import { useParams } from 'react-router-dom'
import "./View.css";
function View() {

  const { id } = useParams()

  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      method: "Get",
      url: `https://fakestoreapi.com/products/${id}`,
    })
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
      })
      .catch((e) => console.log(e));
  }, [id]);
 
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img className="imgStyle"
          src={data.image}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#8360;. {data.price * 100}</p>
          <span>{data.title}</span>
          <p>{data.category}</p>
          
        </div>
        <div className="productDescription">
          <p className="p-bold">Product Description</p>
          <p>
           {data.description}
          </p>
        </div>
        {/* {userDetails && (
          <div className="contactDetails">
            <p className="p-bold">Seller details</p>
            <p>Name : {userDetails.name}</p>
            <p>Phone : {userDetails.phone}</p>
          </div>
        )} */}
      </div>
    </div>
  );
}
export default View;

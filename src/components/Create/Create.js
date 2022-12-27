import React, { useState } from "react";
import "./Create.css";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import axios from "axios";
const Create = () => {
  const [data, setData] = useState('');
  let [name, setName] = useState("");
  let [category, setCategory] = useState("");
  let [price, setPrice] = useState("");
  let [description, setDescription] = useState("");
  let [image, setImage] = useState();

  const navigate = useNavigate();

  const handleSubmit = async() => {
    
    const result = await axios.post("https://fakestoreapi.com/products", {
      title: name,
      price: price,
      description: description,
      image: image,
      category: category,
    });
    setData(result.data)
    console.log(data)
    navigate("/");
    
  };
  return (
    <>
      <Header />
      <div className="centerDiv">
        <label>Name</label>
        <br />
        <input
          className="input"
          type="text"
          name="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <label>Category:</label>
        <select
          name="Category"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          className="input"
        >
          {" "}
          <option>Select Category</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelry</option>
          <option value="men's clothing">Men's clothing</option>
          <option value="women's clothing">Women's clothing</option>
        </select>
        <br />
        <label>Price</label>
        <br />
        <input
          className="input"
          type="number"
          name="Price"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <br />
        <label>Description</label>
        <br />
        <input
          className="input"
          type="text"
          name="Description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <br />

        <input
          type="file"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />
        <br />
        <button className="uploadBtn" onClick={handleSubmit}>
          upload and Submit
        </button>
      </div>
    </>
  );
};

export default Create;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../App.css';
import { Link } from "react-router-dom";

function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    quantity: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const saveProduct = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/products", product);
    navigate("/");
  };

  return (
     <div className="add-product-container">
      <div className="add-product-card">
        <h2 className="add-product-title">Add Product</h2>

        <form className="add-product-form" onSubmit={saveProduct}>
          <input name="name" placeholder="Product Name" onChange={handleChange}/>
          <input name="price" placeholder="Price"  onChange={handleChange} />
          <input name="quantity" placeholder="Quantity"  onChange={handleChange}/>
          <button className="add-product-btn" on>Add Product</button>
        </form>
        <Link to="/">
        <button className="back-btn">Back</button></Link>
        </div>
    </div>

  );
}

export default AddProduct;

import React, { useEffect, useState } from "react";
import axios from "axios";
import '../App.css';
import { Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);
useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async() => {
    const result=await axios.get("http://localhost:8080/api/products")
    setProducts(result.data);
  };

  
  const deletedata = async (id) => {
    await axios.delete(`http://localhost:8080/api/products/${id}`)
    loadProducts();
  };


  return (
    <div className="product-container">
      <h2 className="product-title">Product Stock</h2>
      <table  className="product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>₹{p.price}</td>
              <td>{p.quantity}</td>
              <td>
                <button className="delete-btn" onClick={()=>deletedata(p.id)}>Delete</button>
                <Link to={`/edit/${p.id}`}>
                <button className="edit-btn">Edit</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;

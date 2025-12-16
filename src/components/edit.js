
import '../App.css';
import { useParams,Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState,useEffect } from 'react';


function Edit(){
      const [product, setProduct] = useState({
        name: "",
        price: "",
        quantity: ""
      });
    const { id } = useParams();
      const navigate = useNavigate();

     const editProduct = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/api/products/${id}`, product);
    navigate("/");
  };

useEffect(() => {
   const loadProduct = async () => {
  try {
    const result = await axios.get(
      `http://localhost:8080/api/products/${id}`
    );
    setProduct(result.data);
  } catch (error) {
    console.error("Failed to load product", error);
  }
};
loadProduct();
  },[id]);

  
  
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

    return(
        <div className="add-product-container">
      <div className="add-product-card">
        <h2 className="add-product-title">Edit Product</h2>

        <form className="add-product-form" onSubmit={editProduct}>
          <input name="name" placeholder="Product Name" value={product.name} onChange={handleChange}/>
          <input name="price" placeholder="Price"  value={product.price} onChange={handleChange} />
          <input name="quantity" placeholder="Quantity" value={product.quantity} onChange={handleChange}/>
          <button className="add-product-btn" type='submit'>Update Product</button>
        </form>
        <Link to="/">
        <button className="back-btn">Back</button></Link>
        </div>
    </div>
    );
}
export default Edit;
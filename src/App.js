import './App.css';
import { Routes, Route } from "react-router-dom";
import ProductList from "./components/productlist";
import Navbar from "./components/navbar";
import AddProduct from './components/addproduct';
import Edit from './components/edit';

function App() {
  return (
<div>
      
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/add" element={<AddProduct />} />
         <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      

  </div>
  );
}

export default App;

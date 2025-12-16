import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav style={styles.nav}>
      
      <h2 style={styles.title}>Inventory Management</h2>

      
      <Link to="/add">
        <button style={styles.button}>Add Product</button>
      </Link>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#253a4eff",
    color: "white"
  },
  title: {
    margin: 0
  },
  button: {
    padding: "8px 14px",
    fontSize: "14px",
    cursor: "pointer"
  }
};

export default Navbar;

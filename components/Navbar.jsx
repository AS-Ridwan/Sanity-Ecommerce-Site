import React from "react";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <p className="logo">DOKAN.</p>
      <button type="button" className="cart-icon" onClick="">
        <i class="fa-solid fa-bag-shopping"></i>
        <span className="cart-item-qty">1</span>
      </button>
    </div>
  );
};

export default Navbar;

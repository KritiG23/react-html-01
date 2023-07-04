import React from 'react'
import "./Header.css"

const Header =() => {
  return (
    <div className="header">
        <div className="logo">
            <h2>Food Order</h2>
        </div>
        <div className="nav">
        <div>Home</div>
        <div>About</div>
        <div>Contact</div>
            <div>Cart</div>
        </div>
    </div>
  )
}

export default Header
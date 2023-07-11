import React, { useContext, useState } from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import UserContaxt from '../../utils/UserContaxt'

const Header =() => {
  const[btnChange,setBtnChange]=useState("login")
  const btnHndle=()=>{
    btnChange=="login"? setBtnChange("logout") : setBtnChange("login") 
  }
  const {user} = useContext(UserContaxt)
  console.log(user)
  return (
    <div className="header">
        <div className="logo">
            <h2>Food Order</h2>
        </div>
        <div className="nav">
        <div><Link to="/">Home</Link></div>
        <div><Link to="/about">About</Link></div>
        <div><Link to="/contact">Contact </Link></div>
        <div><Link to="/grocery">Grocery </Link></div>
        <div>{user?.name}</div>
        <div>Cart</div>
            <button onClick={btnHndle}> {btnChange}</button>
        </div>
    </div>
  )
}

export default Header
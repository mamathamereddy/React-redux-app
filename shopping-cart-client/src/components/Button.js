import React from 'react'
import "../App.css";

const Button=({text, type,onClick})=> {
return <button type={type} onClick={onClick} className="Addtocart-button">{text}</button>
}

export default Button
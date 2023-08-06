import React from 'react';
import Category from './Category/Category';
import Price from './Price/Price';
import Colors from './Colors/Colors';
import logo from "../../assets/logo.png"
import './Sidebar.css'

const Sidebar = ({handleChange}) =>{
  return (
    <section className='sidebar'>
      <div className='logo-container'>
            <img className='logo-img' src={logo} alt='logo'/>
        </div>
        <Category handleChange={handleChange}/>
        <Price handleChange={handleChange}/>
        <Colors handleChange={handleChange}/>
    </section>
  )
}

export default Sidebar;
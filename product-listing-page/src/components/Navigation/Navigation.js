import React from 'react';
import {FiHeart} from 'react-icons/fi';
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai';
import logo from "../../assets/logo.png"

import './Navigation.css'

function Navigation({handleInputChange, query}) {
  return (
    
    <nav className='sticky'>
        
      <div className='nav-container'>
      <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search shoes."
        />
      </div>
      <div className='profile-container'>
        <a href='#'>
         <FiHeart className='nav-icons'/>
        </a>
        <a href='#'>
         <AiOutlineShoppingCart className='nav-icons'/>
        </a>
        <a href='#'>
        <AiOutlineUserAdd className='nav-icons'/>
        </a>
      </div>

    </nav>
  )
}

export default Navigation;
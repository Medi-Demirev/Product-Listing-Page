import React from 'react'

import './Footer.css'
 const Footer = () => {
  return (
    <div className='footer-container' >
    &copy; {new Date().getFullYear()} Copyright:{' '}
    <a className='text-footer' href='http://localhost:3000/#'>
      MD.com
    </a>
  </div>
  )
}

export default Footer;
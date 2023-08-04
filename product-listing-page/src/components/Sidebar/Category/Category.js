import React from 'react';

import './Category.css';
import Input from '../../Input/Input';

function Category({handleChange}) {
  return (
    <>
    <div>
     <h2 className='sidebar-title'>Category</h2>
    <label className='sidebar-label-container'>
    <input type='radio' onChange={handleChange} value= "" name='test'></input>
    <span className='checkmark'></span> All
    </label>

    <Input
    handleChange={handleChange}
    value='sneakers'
    title='Sneakers'
    name='test'
    />
    <Input
    handleChange={handleChange}
    value='flats'
    title='Flats'
    name='test'
    />
    <Input
    handleChange={handleChange}
    value='sandals'
    title='Sandals'
    name='test'
    />
    <Input
    handleChange={handleChange}
    value='heels'
    title='Heels'
    name='test'
    />
    <div>
    </div>
    </div>
    </>
  )
}

export default Category;
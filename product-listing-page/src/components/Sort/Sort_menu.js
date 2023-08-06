import React from 'react';

import './Sort_menu.css'

const Sort_menu = ({handleSortChange}) => {
  return (
  <>
 <div>
<h2 className="sort-title">Sort By</h2>
<select onChange={handleSortChange} className='sorting-container'>
    <option  className='sort-btns' value="lowtohigh">Price: Low to High </option>
    <option  className='sort-btns' value="hightolow">Price: High to Low </option>
    <option  className='sort-btns' value="AtoZ">Alphabetical: A-Z </option>
    <option  className='sort-btns' value="ZtoA">Alphabetical: Z-A </option>
</select>
</div>
</>
  )
}
export default Sort_menu;
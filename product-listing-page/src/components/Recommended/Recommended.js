import React from 'react';

import './Recommended.css';
import Button from '../Button/Button';

function Recommended({handleClick, handleSortChange, result}) {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Nike" title="Nike" />
          <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Button onClickHandler={handleClick} value="Puma" title="Puma" />
          <Button onClickHandler={handleClick} value="Vans" title="Vans" />
          { result.length > 1 ? <div className='counter'> Found: {result.length} Products</div> 
          : <div className='counter'> Found: {result.length} Product</div>}
          <div className='sorting-container'>
<h2 className="sort-title">Sort By</h2>
<select onChange={handleSortChange} className='sort-select' >
    <option  className='sort-btns' value="lowtohigh">Price: Low to High </option>
    <option  className='sort-btns' value="hightolow">Price: High to Low </option>
    <option  className='sort-btns' value="AtoZ">Alphabetical: A-Z </option>
    <option  className='sort-btns' value="ZtoA">Alphabetical: Z-A </option>
</select>
</div>
        </div>
      </div>
    </>
  )
}

export default Recommended;
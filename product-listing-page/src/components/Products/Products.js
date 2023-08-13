import React from 'react';


import './Products.css';

function Products({result, loadMore, limit, count }) {
  console.log(limit);
  console.log(count);
  return (
    <>
    <div className='products-container'>  
     <section className='card-container'>{result}</section>
     {
      count > limit ?
     <button className='load-btn' onClick={loadMore}>Load More</button>
     :
     <button className='load-btn' onClick={loadMore} style={{display: "none"}}>Load More</button>
     }
    </div>
    </>
  )
}

export default Products;
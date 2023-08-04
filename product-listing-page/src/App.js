import { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import Products from "./components/Products/Products";
import Recommended from "./components/Recommended/Recommended";
import Sidebar from "./components/Sidebar/Sidebar";
import Card from "./components/Card/Card";

// Database
import products from "./db/data";
import "./index.css";
import Sort_menu from "./components/Sort/Sort_menu";

function App() {
  const [selectedCategory,setSelectedCategory] = useState(null);
  const [query,setQuery]= useState("");

  // ---------Input Filter---------

  const handleInputChange = (event) => {
    setQuery(event.target.value)
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !==-1);
    
  // ---------Radio Filter---------

  const handleChange = (event) => {
    setSelectedCategory(event.target.value)
  };

   // ---------Buttons Filter---------

   const handleClick = (event) => {
    setSelectedCategory(event.target.value)
   };

   function FilteredData(products, query, selected){
    let filteredProducts = products
    
    // Filtering Inputs Items
    if (selected) {
      console.log(selected);
      filteredProducts= filteredItems
    
    } 

    // Selected Filter
    if (query) {
      console.log('med');
      filteredProducts = filteredProducts.filter(({category, color, company, newPrice, title}) => category === query || 
      color === query || company === query || newPrice === query || title === query)
      console.log(filteredProducts);
    };

    return filteredProducts.map(({img, title,star, reviews, prevPrice, newPrice})=>(
      <Card
      key={Math.random()}
      img={img}
      title={title}
      star={star}
      reviews={reviews}
      prevPrice={prevPrice}
      newPrice={newPrice}
      />
    ));
  }
  const result = FilteredData(products,selectedCategory,query)
  console.log(result);
  
  console.log(selectedCategory);
  return (
    <>
    <Sidebar handleChange={handleChange}/>
    <Navigation query={query} handleInputChange={handleInputChange}/>
    <Recommended handleClick={handleClick}/>
    <Sort_menu/>
    <Products result={result}/>

    </>
  );
}

export default App;

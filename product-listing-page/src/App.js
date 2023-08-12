import { useState, useEffect } from "react";
import Navigation from "./components/Navigation/Navigation";
import Products from "./components/Products/Products";
import Recommended from "./components/Recommended/Recommended";
import Sidebar from "./components/Sidebar/Sidebar";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import { v4 as uuidv4 } from 'uuid';
import "./index.css";

// Database
//import products from "./server/data.json";


function App() {
  const [selectedCategory,setSelectedCategory] = useState(null);
  const [query,setQuery]= useState("");
  const [data, setData] = useState();
  const [order, setOrder] = useState("");
  const [post, setPost] = useState([])
  const [products,setProducts] = useState([])
  const Id=uuidv4();

  useEffect(()=> {
    const fetchData = async () => {
      const res = await fetch('http://localhost:5000/api')
      const json = await res.json()
      setProducts(json)
    }
  fetchData()
},[]) 

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

   // ---------Sorting Filter---------

   const handleSortChange = (event) => {
    setOrder(event.target.value)
   };

   

   function FilteredData(products, query, selected, order){
    let filteredProducts = products
    
    // Filtering Inputs Items
    if (selected) {
  
      filteredProducts= filteredItems
    
    } 

    // Selected Filter
    if (query) {
     
      filteredProducts = filteredProducts.filter(({category, color, company, newPrice, title}) => category === query || 
      color === query || company === query || newPrice === query || title === query)
    }

    // Sorting Filter
    if (order === "AtoZ") {
      filteredProducts = [...filteredProducts].sort((a,b) => 
      a.title.localeCompare(b.title))
    } else if (order === "ZtoA") {
      filteredProducts = [...filteredProducts].sort((a,b) => 
      b.title.localeCompare(a.title))
    } else if (order === "lowtohigh") {
      filteredProducts = [...filteredProducts].sort((a,b) => 
      a.newPrice - b.newPrice)
    } else if (order === "hightolow") {
      filteredProducts = [...filteredProducts].sort((a,b) => 
      b.newPrice - a.newPrice)
    }

    return filteredProducts.map(({img, title,star, reviews, prevPrice, newPrice})=>(
      <Card
      key={Math.random()}
      img={img}
      title={title}
      star={star}
      reviews={reviews}
      prevPrice={prevPrice}
      newPrice={newPrice}
      products={products}
      />
    ));
  }
  const result = FilteredData(products,selectedCategory,query, order)

  return (
    <>
    <div className="body">
    <Sidebar handleChange={handleChange}/>
    <Navigation query={query} handleInputChange={handleInputChange}/>
    <Recommended handleClick={handleClick} result={result} handleSortChange={handleSortChange}/>
    <Products result={result}/>
    <Footer/>
    </div>
    </>
  );
}

export default App;

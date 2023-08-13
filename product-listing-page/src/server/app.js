const express = require('express');
const cors = require('cors');

const app = express();

let data = require('./data.json')

let corsOptions = {
    origin : ['http://localhost:3000/'],
 }
   
 app.use(cors(corsOptions));

 app.get("/Allproducts", (req, res) => {
   
    res.header(
        {  "Access-Control-Allow-Origin" : "*",  
        "Access-Control-Allow-Credentials"  : "true"}
    )
   res.json(data)
});

app.get("/products", (req, res) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    const startIndex = (page -1) * limit;
    const endIndex = page * limit; 
  
const result = data.slice(startIndex, endIndex)

    res.header(
        {  "Access-Control-Allow-Origin" : "*",  
        "Access-Control-Allow-Credentials"  : "true"}
    )
   res.json(result)
});

app.listen(5000, ()=> {console.log('Server started on port 5000');})
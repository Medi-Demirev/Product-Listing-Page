const express = require('express');
const cors = require('cors');

const app = express();

let data = require('./data.json')

let corsOptions = {
    origin : ['http://localhost:3000/'],
 }
   
 app.use(cors(corsOptions))

app.get("/api", (req, res) => {
    res.header(
      {  "Access-Control-Allow-Origin" : "*",  
        "Access-Control-Allow-Credentials"  : "true"}
    )
   res.json(data)
});

app.listen(5000, ()=> {console.log('Server started on port 5000');})
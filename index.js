require('dotenv').config()
const express = require('express');

const Product = require("./models/product");
const { default: DbConnect } = require('./config/db.config');
const {  route } = require('./routes/productsroute');

const app = express()
app.use(express.json()) 

DbConnect()
const port = process.env.port  

app.use('/',route)

app.listen(port, () => {
  console.log(`server running on : ${port}`)
})
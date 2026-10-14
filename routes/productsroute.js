const { Router } = require("express");
const { CreateProduct, GetProduct, UpdateProduct, DeleteProduct } = require("../controllers/productController");


const route =Router()

route.post("/api/product" ,CreateProduct) 
route.get("/api/product",GetProduct) 
route.put("/api/product/:id",UpdateProduct) 
route.delete("/api/product/:id",DeleteProduct)  
module.exports= {route}


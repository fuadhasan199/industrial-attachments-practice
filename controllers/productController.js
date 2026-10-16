
const Product = require("../models/product");

// Create Product Controller
const CreateProduct = async (req, res) => {
  try { 
    const data=req.body
    const product = await Product.create(data);

    res.json({message:"Create Successfully",data:product});
  } catch (error) {
    res.json({ message: error.message });
  }
}; 

const GetProduct =async(req,res)=>{ 
    try{ 
    const product=await Product.find() 
    res.json({message:"product get successfully",product},product)
         
    } 
    catch(error){
          console.log(error.message)
    }

} 

const UpdateProduct=async(req,res)=>{
      try{ 
        const product =await Product.findById(req.params.id)  
            product.name = req.body.name
            product.price = req.body.price
            product.description = req.body.description
            product.quantity = req.body.quantity 
            await product.save()
    res.json({message:"product delete successfully",product},product)

      } 
      catch(error){
        console.log(error.message)
      }
}  



const DeleteProduct=async(req,res)=>{
     try{ 
        const product=await Product.findByIdAndDelete(req.params.id) 

        if(!product){
             console.log("product not found")
        } 
        res.json({message:"product delete successfully",product},product) 
     } 
     catch(error){
         console.log(error.message)
     } 
    
}






module.exports={CreateProduct,GetProduct,UpdateProduct,DeleteProduct} 




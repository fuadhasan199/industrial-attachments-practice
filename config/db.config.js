import mongoose from "mongoose";



const DbConnect=()=>{
       mongoose.connect(process.env.DB_URI,{
       dbName:"crud"
      }).then(()=>{
     console.log("Database Connected")
     })

.catch(error => {
  console.error(error.message);
});

} 





export default DbConnect
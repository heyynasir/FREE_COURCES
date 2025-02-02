import mongoose from "mongoose";

const dbConnect = ()=>{
    try{
        mongoose.connect(process.env.MONGO_URL);
        console.log("Databse Connected Successfully")
    }catch(err){
        console.log(err)
    }
}
export default dbConnect;
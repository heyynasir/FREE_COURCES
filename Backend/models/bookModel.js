import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    img : String,
    cource:String,
    instructor:String,
    price:String,
    category:String,
    link:String
})

const Book = mongoose.model("Books" , bookSchema)

export default Book;
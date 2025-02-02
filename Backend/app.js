import express, { urlencoded } from 'express'
const app = express()
import dotenv from 'dotenv'
import dbConnect from './db/db.js'
dotenv.config()
import bookRoute from './routes/bookRoutes.js'
import userRoute from './routes/userRoute.js'
import cors from 'cors'

// app.get('/' , (req,res)=>{
//     res.send("heyy")
// })
app.use(express.json())
app.use(urlencoded({extended:true}))
app.use(cors())

app.get('/' , (req,res)=>{
    res.send("HELLO")
})
app.use('/book' , bookRoute )
app.use('/user' , userRoute)

dbConnect()

const PORT = process.env.PORT;
app.listen(PORT , ()=>{
    console.log("Server is running...",PORT)
})

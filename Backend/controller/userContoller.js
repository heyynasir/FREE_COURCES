import userModel from "../models/userModel.js"
import bcryptjs from 'bcryptjs'

export const createUser = async (req , res)=>{
    try{
        const {fullname , email , password} = req.body;
        const userEmail = await userModel.findOne({email})
        if(userEmail){
            // console.log("Email allready exist!")
            return res.status(400).json({message:"User already exists"})
        }
        const hashPassword = await bcryptjs.hash(password , 10)
        const created = await userModel.create({
            email:email,
            fullname:fullname,
            password:hashPassword
        })
        created.save()
        res.status(201).json({message : "User Created Suucessfully"})
        // console.log(created)
    }catch(err){
        console.log(err)
    }
}


export const login = async (req,res)=>{
    try{
        const {email , password} = req.body;
        const user = await userModel.findOne({email})
        const isMatch = await bcryptjs.compare(password , user.password)
        if(!user || !isMatch){
            return res.status(400).json({message:"Invalid username or password"})
        }else{
            res.status(200).json({message:"Login Successfully" , user:{
                _id:user._id,
                fullname:user.fullname,
                email:user.email
            }})
        }
    }catch(err){
        console.log(err)
    }
}

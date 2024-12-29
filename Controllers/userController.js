const user = require("../models/userSchema")
const product=require("../models/productSchema")
const order=require("../models/orderSchema")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const {validationResult}= require("express-validator")


const login = async(req,res)=>{
    try{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
        }
        const {email,password}= req.body
        const userExist = await User.findOne({email})
        if(!userExist) res.status(400).json({msg:"user exist , try to register "})
            else{
                  const checkPW= await bcrypt.compare(password,userExist.password)
                  if (!checkPW) res.state(400).json({msg:"wrong password , try again"})
                    else{
                        const token = jwt.sign({id:userExist._id, role:userExist.role},process.env.JWT_SECRET,{expiresIn:"10d"} )
                        res.status(201).json({msg:"user created!", token:token, user:userExist})
                
                    }
                  const createUser = await User.create({email,password:hashPW})
                 
        
            }



    }
    catch(err){
        res.status(500).json({msg:"something wront wrong", error:err.message})

    }
}

const getUserData= async(req,res)=>{
    try{
        const user = await personalbar.findOne({_id:req.userId})
        if(!user) res.status(400).json({msg:"user does not exist , try to register "})
        res.status(200).json({msg:"user info success", user:user})

    }
    catch(err){
        res.status(500).json({msg:"something wront wrong", error:err.message})

    }

    }
    const getProduct= async(req,res)=>{
        try{
            const products = await Product.find()
            res.status(201).json({msg:"get all product",products:products})

        }
        catch(err){
            res.status(500).json({msg:"something wront wrong", error:err.message})



    }
}
const createOrder = async(req,res)=>{
    try{
        const {userId,productList}=req.body
        const newOrder = await Order.create({Products:productList,owner:userId})
        res.status(500).json({msg:"send order!", newOrder})
    }

    catch(err){
        res.status(500).json({msg:"something wront wrong", error:err.message})

}
}
//@dec getUserOrder role:user
//@Methode get
//Path / getuserorder
//@access public
const getUserOrder = async (req,res)=>{
    try{
        const {userId} = req.body
        const userOrder = await Order.find({owner:userId})
        res.status(201).json({msg:"get all user order",userOrder:userOrder})
      }


    catch(err){
        res.status(500).json({msg:"something wront wrong", error:err.message})

}
}




module.exports={register,login,getUserData,createOrder,getUserOrder}

const product=require("../models/productSchema")
const order=require("../models/orderSchema")


const addProduct = async(req,res)=>{
    try{
       
        const {title,description,price,poster}= req.body
        const newProduct = await Product.create(req.body)
       
                        res.status(201).json({msg:"Product created", Product:newProduct})
                
                    }
                  const createUser = await User.create({email,password:hashPW})
                 
        
            }



    
    catch(err){
        res.status(500).json({msg:"something wront wrong", error:err.message})

    }
    const updateProduct = async(req,res)=>{
        try{
           
            const {title,description,price,poster}= req.body
            const updateProduct = await Product.findByIdAndDelete(req.params.id)
           
                            res.status(201).json({msg:"Product updated", Product:deleteProduct})
                    
                        
                      const createUser = await User.create({email,password:hashPW})
        }
                     
            
    }
    
    
    
        
        catch(err){
            res.status(500).json({msg:"something wront wrong", error:err.message})
    
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

const deleteProduct = async (req,res)=>{
    try{
        const {userId} = req.body
        const userOrder = await Order.find({owner:userId})
        res.status(201).json({msg:"product deleted",userOrder:userOrder})
      }


    catch(err){
        res.status(500).json({msg:"something wront wrong", error:err.message})

}
}





module.exports={addProduct,updateProduct,deleteProduct,getOrders}//updateProduct,deleteProduct,getOrders
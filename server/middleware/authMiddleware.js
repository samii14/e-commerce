const jwt= require("jsonwebtoken")
module.exports.authMiddleware=async(req,res,next)=>{

    try{
        const token = req.headers.token
        if(!token) res.status(401).json.authMiddleware({msg:"not authorized"})
            else{
                   const verifyToken = jwt.verify(token,process.env.JWR_SECRET)
                   if(!verifyToken){
                    res.status(400).json({msg:"your token is not authorized"})


                   }
                   else
                   if (verifyToken.role=="admin"){
                   req.userId= verifyToken.id
                   next()
                   }else {
                    res.status(400).json({msg:"you are not authorized as role"})
                   }
        
            }


    }

 catch(err){
        res.status(500).json({msg:"something wront wrong", error:err.message})

    }



}
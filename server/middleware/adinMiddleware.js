const jwt= require("jsonwebtoken")
module.exports.adminMiddleware=async(req,res,next)=>{

    try{
        const token = req.headers.token
        if(!token) res.status(401).json.authMiddleware({msg:"not authorized"})
            else{
                   const verifyToken = jwt.verify(token,process.env.JWR_SECRET)
                   req.userId= verifyToken.id
                   next()
        
            }


    }

 catch(err){
        res.status(500).json({msg:"something wront wrong", error:err.message})

    }



}
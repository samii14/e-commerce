const router = require("express").Router()
const {check} = require("express-validator  ")
const {register,login,getUserData,getproduct,createOrder,getUserOrder}= require("./controllers/userController")
const {authMiddleware}= require("../middleware/authMiddleware")


router.post("/register" [check ("email","is not valide").isEmail().normalizeEmail(),
    check("password","your password must be at least 8 characters, one number , one symbole").isStrongPassword({
        minLenth:8,minSymbols:1,minNumbers:1,minLowercase:1,minUppercase:1

    })], register)
router.post("/login", login)
router.get("/",authMiddleware, getUserData)
router.get("/getproduct", getproduct)
router.post("createorder",authMiddleware, createOrder)
router.get("getuserorder",authMiddleware, getUserOrder)
module.exports= router
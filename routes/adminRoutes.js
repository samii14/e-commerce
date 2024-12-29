const router = require("express").Router()
const {register,login,getUserData,getproduct,createOrder,getUserOrder}= require("./controllers/adminController")
const {adminMiddleware, authMiddleware}= require("../server/middleware/authMiddleware")


router.post("/addproduct", addProduct)
router.put("/updateproduct/:id",authMiddleware, updadeProduct)
router.get("/deleteproduct/:id", deleteProduct)
router.get("createorder",authMiddleware, createOrder)

module.exports= router
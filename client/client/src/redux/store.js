import {configureStore} from "@reduxjs/toolkit"
import uderSlice from "./slices/userSlice"
import ProductSlice from "./slices/productSlice"
import panierSlice from "./slices/panierSlice"



export default configureStore({reducer:{user:userSlice, products:productSlice, panier:panierSlice}})
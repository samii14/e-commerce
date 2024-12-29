import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import { registerUser } from "../userSlice";
export const GetProduct = createAsyncThunk("Product", async(data,{rejecteWithValue})=>{ 
    try{
     const res = await axios.post("/user/getproduct", data)
    }
    catch(error){
        rejecteWithValue(error.response.data.msg)
    }
}


)
const productSlice= createSlice({
    name:"product",
    initialState:{
        isLoading: false,
        error: false,
        products:[]
    },
    reducers: { 
        

    },
    extraRdeucers:{
        [GetProduct.pending]:(state)=> (state.isLoading=true),
        [GetProduct.fulfilled]:(state,action)=> {
            state.error= null

        
        },
        [registerUser.regected]:(state,action)=> {
            state.error= action.payload.error
            state.isAuth=null
            state.isLoading=false
        },

    }
})


export default productSlice.reducer;
//export const {logout}= userSlice.actions
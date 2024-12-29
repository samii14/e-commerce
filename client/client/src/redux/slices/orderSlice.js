import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import { registerUser } from "../userSlice";
export const createOrder  = createAsyncThunk("Order", async(data,{rejecteWithValue})=>{ 
    try{
     const res = await axios.post("/user/createOrder", data)
     headers:{
        token:localStorage.getItem("token")
     }
    }
    catch(error){
        rejecteWithValue(error.response.data.msg)
    }
}


)
const orderSlice= createSlice({
    name:"order",
    initialState:{
        isLoading: false,
        error: false,
        orders:[]
    },
    reducers: { 
        

    },
    extraRdeucers:{
        [createOrder.pending]:(state)=> (state.isLoading=true),
        [createOrder.fulfilled]:(state,action)=> {
            state.error= null
        },
        [createOrder.regected]:(state,action)=> {
            state.isAuth=null
            state.isLoading=false
        },

    }
})


export default orderSlice.reducer;
//export const {logout}= userSlice.actions 
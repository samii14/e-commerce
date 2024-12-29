import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
export const registerUser = createAsyncThunk("Register", async(data,{rejecteWithValue})=>{ 
    try{
     const res = await axios.post("/user/register", data)
    }
    catch(error){
        rejecteWithValue(error.response.data.msg)
    }
}


)

export const LoginUser = createAsyncThunk("Login", async(data,{rejecteWithValue})=>{ 
    try{
     const res = await axios.post("/user/register", data)
    }
    catch(error){
        rejecteWithValue(error.response.data.msg)
    }
}


)



const uderSlice= createSlice({
    name:"user",
    initialState:{
        isLoading: false,
        token: localStorage.getItem("token") || null,
        error: false,
        isAuth: Boolean(localStorage.getItem("isAuth")) || false


    },
    reducers: { 
        logout:(state)=>{
            localStorage.removeItem("token")
            localStorage.removeItem("isAuth")
            state.isAuth=false
            state.token=null
        }  

    },
    extraRdeucers:{
        [LoginUser.pending]:(state)=> (state.isLoading=true),
        [LoginUser.fulfilled]:(state,action)=> {
            state.token= action.payload.token
            state.error= null
            state.isAuth=true
            localStorage.setItem("token", state.token)
            localStorage.setItem("isAuth", state.isAuth)
        
        },
        [LoginUser.regected]:(state,action)=> {
            state.error= action.payload.error
            state.isAuth=false
        },

    }
})


export default userSlice.reducer
export const {logout}= userSlice.actions
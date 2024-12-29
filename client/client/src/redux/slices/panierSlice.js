import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";


const panierSlice= createSlice({
    name:"product",
    initialState:{
        products:[]
    },
    reducers: { 
        addProductPanier:(state,action)=>{
            state.products=[...state.products,action.payload]
        }
        

    },
   
});


export default panierSlice.reducer;
export const {addProductPanier}= panierSlice.actions
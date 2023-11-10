import { createSlice} from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name : 'product',
    initialState : [],
    reducers : {
        _setProduct : ( state , action ) => {
            return action.payload;
        },
        _addProduct : ( state , action ) => {
            return state.push(action.payload);
        },
        _removeProduct : ( state , action ) => {
            return state.filter((p) => p.id !== action.payload)
        }
    }
})


export const { 
    _addProduct , 
    _removeProduct , 
    _setProduct 
} = createSlice.actions;

export default productSlice.reducer;
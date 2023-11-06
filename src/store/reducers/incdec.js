import { createSlice } from "@reduxjs/toolkit";

export const incdecSlice = createSlice({
    // you have to provide name for your slice 
    name : 'incdec',
    // you can set intial state as we set in the state of react such as 
    // you make a state for string so intial state is empty string
    // if you make a state of array then empty [] 
    // and same for number and boolean or for null 
    initialState : 0,
    reducers : {
        _inc : (state , action) => {
            return state += 1;
        },
        _dec : (state , action) => {
            return state -= 1;
        },
        _contoledInc : (state , action) => {
            return state += action.payload;
        },
        _contoledDec : (state , action) => {
            return state -= action.payload;
        }
    }

})

export const { 
    _inc, 
    _dec,  
    _contoledDec,
    _contoledInc
} = incdecSlice.actions ;
export default incdecSlice.reducer;

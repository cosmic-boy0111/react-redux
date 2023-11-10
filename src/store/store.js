import { configureStore } from "@reduxjs/toolkit";
import incdecReducer from "./reducers/incdec";
import productReducer from "./reducers/product";

export default configureStore({
    reducer : {
        number : incdecReducer,
        product : productReducer
    }
})
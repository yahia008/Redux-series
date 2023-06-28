import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice";


export const Store = configureStore({
    reducer:{


        counter:counterReducer,

    }
})
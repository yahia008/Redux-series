import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./postSlice";
import userReducer from "../project1/users/userSslice";

export const store = configureStore({
    reducer: {
     posts:postsReducer,
     users:userReducer
    }
})
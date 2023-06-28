import { createSlice } from "@reduxjs/toolkit";

 const initialState = [
    {id:'0', name:'john wick'},
    {id:'2', name:'bruce wick'},
    {id:'3', name:'micheal danas'},

]

const userSlice = createSlice({
    name:'users',
    initialState,
    reducers: {

    }
})

export const selectAllusers = (state) => state.users

const userReducer = userSlice.reducer
export default userReducer
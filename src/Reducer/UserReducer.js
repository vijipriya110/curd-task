import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name : "userInfo",
    initialState : {
        data : {name : "", password : ""}
    },
    reducers : {
        loginUser : (state, action) =>{
            state.data = action.payload
        }
    }
})
export const {loginUser} = userSlice.actions

export default userSlice.reducer
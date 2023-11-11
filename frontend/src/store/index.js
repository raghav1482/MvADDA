import {createSlice , configureStore} from "@reduxjs/toolkit";
const authSlice = createSlice({
    name:"auth",
    initialState:{user:"" , isloggin:false},
    reducers:{
        login(state){
            state.isloggin = true;
        },
        logout(state){
            state.isloggin = false;
        },
    }
});
export const authActions =  authSlice.actions;
export const store = configureStore({
    reducer:authSlice.reducer
})
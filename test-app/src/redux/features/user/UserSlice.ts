import { createSlice } from "@reduxjs/toolkit";
import loginRequest from './loginRequest';

export type UserState = {
    status: "loading" | "idle",
    error: string | null,
    user: {} | null
}

const initialState: UserState = {
    status: "idle",
    error: null,
    user:null
}

export const UserController = createSlice(
    {
        name: 'User',
        initialState,
        reducers: {
            login: (state, action) => {
                console.log('login action')
                state.user = action.payload;
            },
            logout: (state) => {
                state.user = {};
            }
        },
        extraReducers: (builder) => {
            builder.addCase(loginRequest.fulfilled, (state, action) => {
                console.log(action.payload)
                state.user = action.payload
            })
        },
        
    }
);

export const { login, logout } = UserController.actions;

export const selectUser = (state: any) => state;

export default UserController.reducer;


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import User from "../../API/User";
// import { UserClass } from "../../Types/class/UserClass";
// import userState from '../../Types/states/userState';


const loginRequest = createAsyncThunk('loginRequest',
    async (loginPayload) => {
        const response = await axios.get('http://localhost:3001/exercises')
        console.log(response);
        return response;
    }
    )

export const UserController = createSlice(
    {
        name: 'User',
        initialState: {
            user: {}
        },
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
                state.user = action.payload
            })
        },
        
    }
);

export const { login, logout } = UserController.actions;
export const selectUser = (state: any) => state;

export default UserController.reducer;
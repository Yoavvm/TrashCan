import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { login, UserState } from './UserSlice';
import type { RootState, AppDispatch } from '../../store'


const loginRequest = createAsyncThunk('loginRequest',
    async () => {
        const response:any = await axios.get<{}>('http://localhost:3001/exercises')
        console.log(response.data)
        return response.data;
    }
    )


export default loginRequest;
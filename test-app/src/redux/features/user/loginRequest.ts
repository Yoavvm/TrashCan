import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { UserState } from './UserSlice';

const loginRequest = createAsyncThunk<UserState>("loginRequest",
    async () => {
        const response:any = await axios.get<UserState>('http://localhost:3001/exercises')
        // console.log(response);
        return response;
    }
    )


export default loginRequest;
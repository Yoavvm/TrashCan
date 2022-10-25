import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { login, UserState } from './UserSlice';
import type { RootState, AppDispatch } from '../../store'


const register = createAsyncThunk('register',
    async (registerPayload: any) => {
        const response: any = await axios.put<{}>('http://localhost:3001/users', registerPayload)
        return response.data;
    }
)



export default register;

// export type LoginPayload = {
//     userID: string,
//     userPassword: string
// }
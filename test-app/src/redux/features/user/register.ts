import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';



type RegisterPayload = {
    email: string,
    password: string
}

const register = createAsyncThunk('register',
    async (registerPayload: RegisterPayload) => {
        const response: any = await axios.put<{}>('http://localhost:3001/users', registerPayload)
        return response.data;
    }
)

export default register;

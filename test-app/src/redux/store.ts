import { configureStore } from "@reduxjs/toolkit";
import UserController from "./features/user/UserSlice";

export default configureStore({
    reducer: {
       User: UserController
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})
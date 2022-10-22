import { configureStore } from "@reduxjs/toolkit";
import UserController from "./features/User";

export default configureStore({
    reducer: {
       User: UserController
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})
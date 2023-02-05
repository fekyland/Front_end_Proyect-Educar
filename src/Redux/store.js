import { configureStore } from "@reduxjs/toolkit"

import loginReducer from "./UserReducer"


export const store = configureStore({
    reducer:{
        authReducer: loginReducer,
       
    },
})
import { configureStore } from "@reduxjs/toolkit"

import loginReducer from "./UserReducer"
import cursadasReducer from "./CursadasReducer"


export const store = configureStore({
    reducer:{
        authReducer: loginReducer,cursadasReducer
       
    },
})
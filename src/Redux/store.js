import { configureStore } from "@reduxjs/toolkit"

import loginReducer from "./UserReducer"
import CursadasReducer from "./CursadasReducer"


export const store = configureStore({
    reducer:{
        authReducer: loginReducer,CursadasReducer
       
    },
})
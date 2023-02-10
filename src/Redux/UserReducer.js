import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  //estado inicial
  status: false, // estatus pasa a true
  type: null, // string este usario es
  username: null,
  token: null,
  email:null,
  name:null
  
}
console.log(initialState.value)
export const loginReducer = createSlice({
  name: 'authReducer',
  initialState,
  reducers: {
    login: (state, action) => {
      //accion + login
      state.status = action.payload.success, //state
      state.username = action.payload.username
      state.type = action.payload.message 
      state.token = action.payload.token                 //le pasamos el estado de auten del usuarion
      state.email = action.payload.email
      state.name = action.payload.name
    },
    logout: (state) => {
        (state.status = false), //state
        (state.username = null),
        (state.type = null),
        (state.token = null),
        (state.email = null),
        (state.name = null)
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, logout } = loginReducer.actions

export default loginReducer.reducer

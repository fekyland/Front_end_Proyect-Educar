import { createSlice } from '@reduxjs/toolkit' //esto es un reduer


const initialState = {
  //estado inicial
  description: null,
  email: null,
  name: null,
  title: null,
  video: null,
}

console.log(initialState.value)
export const cursadasReducer = createSlice({
  name: 'cursadas',
  initialState,
  reducers: {
    comprarCursadas: (state, action) => {
      return {
        ...state,
        description: action.payload.description,
        email: action.payload.email,
        name: action.payload.name,
        title: action.payload.title,
        video: action.payload.video,
      };
    },
    limpiarCursadas: (state) => {
      return {
        ...state,
        description: null,
        name: null,
        email: null,
        title: null,
        video: null,
      }
    },
  },
})

export const { comprarCursadas, limpiarCursadas } = cursadasReducer.actions

export default cursadasReducer.reducer

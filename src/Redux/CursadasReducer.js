import { createSlice } from '@reduxjs/toolkit' //esto es un reduer
import { useState } from 'react';
//const pelisStorage = sessionStorage.getItem("moviesRented");
//const movies = JSON.stringify(pelisStorage.peliculas)
//console.log(pelisStorage)



const initialState = {
  cursadas: [],
}

console.log(initialState.value)
export const cursadasReducer = createSlice({
  name: 'cursadas',
  initialState,
  reducers: {
    comprarCursadas: (state, action) => {
      //accion + login
      state.cursadas = action.payload //state
    },
    limpiarCursadas: (state) => {
      //accion + login
      state.cursadas = [] //state
    },
  },
})

// Action creators are generated for each case reducer function
export const { comprarCursadas, limpiarCursadas } = cursadasReducer.actions

export default cursadasReducer.reducer

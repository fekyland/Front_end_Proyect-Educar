import React from 'react'
import { useSelector } from 'react-redux'
import { login } from "../../Redux/UserReducer"
import { comprarCursadas } from '../../Redux/CursadasReducer'




export default function ShopForm() {

  
  const cursoComprado = useSelector(state => state.compra)
  console.log(cursoComprado)
  
    
  return (
   <div></div>
  )
}

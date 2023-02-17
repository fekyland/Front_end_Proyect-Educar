import React from 'react'
import { useNavigate } from 'react-router-dom'
import TokenStorageService from '../../_services/TokenStorageService'
import { useEffect,useState } from 'react'
import CursadaService from '../../_services/CursadaService'
import Cursada from '../Cursada/Cursada'


export default function MisCompras() {

    const usuario = 'userId'
    const UserId = localStorage.getItem(usuario);
    console.log(typeof UserId) 


    const [comproCursada,setComproCursada] = useState({})

 
    useEffect(() => {
        findBuyersById()
        
       }, [])

       const findBuyersById = async () => {
        try {
          console.log(UserId)
          const res = CursadaService.findBuyersById(UserId)
          console.log(res)
          setComproCursada(res)
       
        } catch (error) {
          console.log(error.message || error)
        }
       
      }


  return (
      
    <div className="cursada-list">
    <div className="container pt-5 pb-5 ">
      <h1 className="h1  mb-5 ">Cursadas compradas</h1>

      <div className="d-flex flex-wrap justify-content-center gap-5 mb-5">
        {comproCursada.length > 0 &&
          comproCursada.map((comprada) => <Cursada key={comprada.id} cursada={comprada} />)}
      </div>
    </div>
    </div>
  )
}

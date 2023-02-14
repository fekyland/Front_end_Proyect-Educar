import React from 'react'
import { useState, useEffect } from 'react'
import CursadaService from '../../_services/CursadaService.js'
import { environment } from '../../_enviroment/environment.js'
import { format } from 'date-fns'
import './CursadaDetail.scss'
import { useParams } from 'react-router-dom'
import UserService from '../../_services/UserService'
import { useNavigate } from 'react-router-dom'
import { comprarCursadas } from '../../Redux/CursadasReducer.js'
import { useDispatch,useSelector } from 'react-redux'






export default function CursadaDetail() {
  const dispatch = useDispatch()
  const navigate  = useNavigate();
  const [cursada, setCursada] = useState({})
  const { id } = useParams()
  const usuario = 'userId'
  const UserId = localStorage.getItem(usuario);
  const cursadas  = useSelector(comprarCursadas)
  console.log(cursadas)

  useEffect(() => {
    getSingleCursada()
    
  }, [])
  
  const getSingleCursada = async () => {
    try {
      const res = await CursadaService.getSingleCursada(id)
      setCursada(res.data.data)
      console.log('res.data.results', res.data)
      console.log(cursada)
      dispatch((comprarCursadas(res.data.data)))
    } catch (error) {
      console.log(error.message || error)
    }
  }
  const handleClick = (e) =>{
      navigate('/cursadas/shopform')

  }
 {/* const rentCursada= async (UserId,id) => {
    try {
     const res =  await UserService.rentCursada(UserId,id)
     dispatch(comprarCursadas(res.data))  

     console.log(cursadas)
     console.log("compra exitoso", res)
  
    } catch (error) {
      console.log(error.message || error)
    }
  }
  const getYear = (date) => format(Date.parse(date), 'yyyy')
 { /*const handleAlquilar = () => {
    if(userState.status){
      rentCursada(UserId,id)

    }else {
      setErrorLogin(true)
      setTimeout(() => {
        setErrorLogin(false)
      }, 3500);
    }
   
  }*/}
  const cursadasRed = useSelector((state) => state.cursadas);
  console.log(cursadasRed)
console.log(typeof cursada.video)

  return (
     <div>
      
    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col-auto d-none  d-lg-block">
        <iframe width="560" height="315" src={cursada.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div class="col p-4 d-flex flex-column position-static">
        <strong class="d-inline-block mb-2 text-primary">Autor@{cursada.name}</strong>
        <h3 class="mb-0">{cursada.title}</h3>
        <div class="mb-1 text-muted">Nov 12</div>
        <p class="card-text mb-auto">{cursada.description}</p>
        <a href="#" class="stretched-link" >precio: {cursada.price} </a>
        </div>
     </div>
     <button type="button" href="/cursadas/shopform" class="btn btn-success" onClick={handleClick}>Agregar al carrito</button>
    </div>
 

  )
  }
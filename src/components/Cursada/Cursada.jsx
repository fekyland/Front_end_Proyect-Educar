import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { environment } from '../../_enviroment/environment.js'
import { format } from 'date-fns'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState,useEffect } from 'react'
import './Cursada.scss'
import CursadaService from '../../_services/CursadaService.js'

function Cursada({ cursada }) {
  const navigate = useNavigate()
  const mail = 'userMail'
  const email = localStorage.getItem(mail)
  const  id  = `${cursada._id}`
  const usuario = 'userId'
  const UserId = localStorage.getItem(usuario);
  const userState = useSelector( (state)=>state.authReducer); 



const checkCursada = async ()=> {
  try {
     console.log(id)
     console.log(UserId)
     const res = await CursadaService.checkCursada(id,UserId) 
     console.log(res.data.results)
       if (res.data.results === null){
          navigate(`/cursadas/id/${cursada._id}`)
         }else{
             navigate (`/cursadas/cursadacomprada/${cursada._id}`)
         }
   } catch (error) {
       console.log(error.message || error)
       }
     }
{/*const handleCheckear = (id) =>{
  console.log(id)
  if (userState.status){
    checkCursada(id)
   
  }else{
    navigate(`/users/login`)
  }

}*/}


  
  const getCursadaDetails = (cursada) => {
  if (email === `${cursada.email}`){
    navigate (`/cursadas/cursadacomprada/${cursada._id}`)
  }else{
   
  }
  }
  const getYear = (date) => format(Date.parse(date), 'yyyy')

  return (
    <div className="">
      <div
        className="card  text-start movie-card "
        style={{ width: '13rem' }}
       
      >
       <div className="z-2 position-absolute p-5 rounded-3 " > <h1 className='font-size-30'></h1>     </div>
        {cursada.video}
          <div className="vote-average vote-average--movie">
            {cursada.price}
          </div>
        <div className="card-body">
          <div className="card-title mb-2 mt-2 fs-6 fw-bold text-center"onClick={() => getCursadaDetails(cursada)} >{cursada.title}</div>
          <div className="release-date">{""}</div>
         
          {(email === `${cursada.email}` ?
             
                (<div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary"  onClick={() => getCursadaDetails(cursada)}>Reproducir</button>
                  <button type="button" class="btn btn-sm btn-outline-success">editar</button>
                  
                </div>
                
              </div>
              )
              :( <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary"  onClick={() => checkCursada()}>Reproducir</button>
                <button type="button" class="btn btn-sm btn-outline-success">es otro</button>
                
              </div>
              <small class="text-muted">9 mins</small>
            </div>
        
      ))}
              
          </div>
          </div>
          </div>
  )
}

Cursada.propTypes = {
  cursada: PropTypes.object.isRequired,
}

export default Cursada
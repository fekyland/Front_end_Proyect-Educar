import React from 'react'
import { useNavigate } from 'react-router-dom'
import TokenStorageService from '../../_services/TokenStorageService'
import { useEffect,useState } from 'react'
import CursadaService from '../../_services/CursadaService'
import Cursada from '../Cursada/Cursada'

export default function UserPanel() {
  const navigate = useNavigate()
  const usuario = 'userId'
  const UserId = localStorage.getItem(usuario);
  console.log(typeof UserId) 
  const mail = 'userMail'
  const email = localStorage.getItem(mail)
 
 console.log(typeof email)
 
 
  useEffect(() => {
   findByEmail()
   findBuyersById()
   
  }, [])

  const [misCursadas, setMisCursadas] = useState({})
  const [comproCursada,setComproCursada] = useState({})
  
  const handleLogout = () => {
    TokenStorageService.logOut()
    navigate('/')
  }
 

  const findByEmail = async () => {
    try {
      const res = await CursadaService.findByEmail(email)
      setMisCursadas(res.data.data)
    } catch (error) {
      console.log(error.message || error)
    }
  }
  console.log(UserId)
const findBuyersById = async () => {
  try {
    console.log(UserId)
    const res = await CursadaService.findBuyersById(UserId)
    setComproCursada(res.data.results)

  } catch (error) {
    console.log(error.message || error)
  }
 
}
console.log(comproCursada)
  return (
    <div className="cursada-list">
    <div className="container pt-5 pb-5 ">
      <h1 className="h1  mb-5 ">Mis Aulas</h1>

      <div className="d-flex flex-wrap justify-content-center gap-5 mb-5">
        {misCursadas.length > 0 &&
          misCursadas.map((cursada) => <Cursada key={cursada.id} cursada={cursada} />)}
      </div>
    </div>
    
    
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







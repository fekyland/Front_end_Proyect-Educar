import React from 'react'
import { useState, useEffect } from 'react'
import CursadaService from '../../_services/CursadaService.js'
import { environment } from '../../_enviroment/environment.js'
import { format } from 'date-fns'
import './CursadaDetail.scss'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { comprarCursadas } from '../../Redux/CursadasReducer'
import UserService from '../../_services/UserService'
import RentedCursada from '../RentedCursada/RentedCursada.jsx'
import { useNavigate } from 'react-router-dom'

export default function CursadaDetail() {
  const dispatch = useDispatch()
  const cursadas = useSelector((state) => state.cursadas)
  const userState = useSelector( (state)=>state.authReducer);
  const navigate  = useNavigate();
  const [rentStatus, setRentStatus] = useState(false)
  const [statusAlquilada, setStatusAlquilada] = useState(false)
  const [cursada, setCursada] = useState({})
  const [showMoviesStatus, setShowMoviesStatus] = useState(true)
  const { id } = useParams()

  const UserId = sessionStorage.getItem("userId");
  console.log(UserId)
  const Rented = sessionStorage.getItem("moviesRented");
  const [errorLogin, setErrorLogin] = useState(false)


  useEffect(() => {
    getSingleCursada()
    
  }, [])
  
  const getSingleCursada = async () => {
    try {
      const res = await CursadaService.getSingleCursada(id)
      setCursada(res.data)
      console.log('res.data.results', res.data)
      
    } catch (error) {
      console.log(error.message || error)
    }
  }
  const rentCursada= async (UserId,id) => {
    try {
     const res =  await UserService.rentCursada(UserId,id)
     dispatch(comprarCursadas(res.data))  
     console.log("compra exitoso", res)
    } catch (error) {
      console.log(error.message || error)
    }
  }
  const getYear = (date) => format(Date.parse(date), 'yyyy')
  const handleAlquilar = () => {
    if(userState.status){
      rentCursada(UserId,id)

    }else {
      setErrorLogin(true)
      setTimeout(() => {
        setErrorLogin(false)
      }, 3500);
    }
   
  }



  return (
    <>
      {showMoviesStatus ? (
        <RentedCursada cursadas={cursadas} backstatus={setShowMoviesStatus} />
      ) : (
        <>
          {cursada._id && (
            <div className="backdrop-container">
              <div
                className="backdrop-background"
                style={""}
              ></div>
              <div className="container pt-5 pb-5">
                <div className="row">
                  <div className="col-md-4">
                    <img
                      src={""}
                      className="img-fluid mb-4 mb-md-0"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8 text-start">
                    <h1 className="h1 fw-bold  mb-3">
                      {cursada.title}{' '}
                      <span className="fw-lighter">
                        ({""})
                      </span>
                    </h1>
                    <div className="mb-4"></div>
                    <div className="mb-4 vote-average">
                      {""}
                    </div>
                    <h5 className="fw-bold">Overview</h5>
                    <p className="fs-5">{""}""</p>
                        <div>
                        <button
                          type="button"
                          class="btn btn-primary"
                          onClick={handleAlquilar}
                        >
                          {rentStatus ? 'alquilada' : 'alquilar'}
                        </button>
                        {userState.status && 
                        <button
                        type="button"
                        class="btn btn-primary"
                        onClick={() => navigate("/user")}
                      >
                        Ver peliculas alquiladas
                      </button>
                        }
                        
                      </div>
                      {errorLogin && 
                          <div className='alert alert-success' role ="alert" >
                          Tenes que loguearte para iniciar sesión. <a href="/login" className='alert-link'>Login</a>
                    </div>
                      }
                      
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  )
}

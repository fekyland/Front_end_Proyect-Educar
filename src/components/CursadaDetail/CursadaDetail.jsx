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
import { NavLink } from 'react-router-dom'






export default function CursadaDetail() {
  const dispatch = useDispatch()
  const navigate  = useNavigate();
  const [cursada, setCursada] = useState({})
  const { id } = useParams()
  const usuario = 'userId'
  const UserId = localStorage.getItem(usuario);
  const cursadas  = useSelector(comprarCursadas)
  console.log(UserId)
  console.log(id)

  
 
  useEffect(() => {
   
    getSingleCursada()
    
  }, [])
  
  const getSingleCursada = async () => {
    try {
      const res = await CursadaService.getSingleCursada(id)
      setCursada(res.data.data)
      console.log('res.data.results', res.data.data)
      console.log(cursada)
     
    } catch (error) {
      console.log(error.message || error)
    }
  }
  const handleComprar = (e) =>{
      //navigate('/cursadas/vercursada')
      buyCursada(UserId,id)
      navigate(`/cursadas/cursadacomprada/${cursada._id}`)

  }
  const buyCursada = async (UserId,id) => {
    try {
     const res =  await CursadaService.buyCursada(UserId,id)
     console.log("compra exitoso", res.data)
  
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
       <div>
      <section className="h-100 h-custom" style={{ background: '#eee' }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card">
                <div className="card-body p-4">
                  <div className="row">
                    <div className="col-lg-7">
                      <h5 className="mb-3">
                        <a href="#!" className="text-body">
                          <i className="fas fa-long-arrow-alt-left me-2"></i>
                       
                        </a>
                      </h5>
                      <hr />

                      <div className="d-flex justify-content-between align-items-center mb-4 ">
                        <div>
                          <p className="mb-1  "><iframe width="560" height="315" src={cursada.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></p>
                          <p className="mb-0">{cursada.description}</p>
                        </div>
                        <div>
                          <p className="mb-0">
                            <span className="text-muted">precio:</span>{' '}
                            <a href="#!" className="text-body">
                            {cursada.price} <i className="fas fa-angle-down mt-1"></i>
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="card bg-info text-white rounded-3">
                        <div className="card-body ">
                          <div className="d-flex justify-content-between align-items-center mb-4 ">
                            <h5 className="mb-0 ">Compra a realizar:  {cursada.title}</h5>
                          </div>
                          <p className="small mb-2">Card type</p>
                          <a href="#!" type="submit" className="text-white">
                            <i className="fab fa-cc-mastercard fa-2x me-2"></i>
                          </a>
                          <a href="#!" type="submit" className="text-white">
                            <i className="fab fa-cc-visa fa-2x me-2"></i>
                          </a>
                          <a href="#!" type="submit" className="text-white">
                            <i className="fab fa-cc-amex fa-2x me-2"></i>
                          </a>
                          <a href="#!" type="submit" className="text-white">
                            <i className="fab fa-cc-paypal fa-2x"></i>
                          </a>

                          <form className="mt-4">
                            <div className="form-outline form-white mb-4">
                              <input
                                type="text"
                                id="typeName"
                                className="form-control form-control-lg"
                                siez="17"
                                placeholder="Cardholder's Name"
                              />
                              <label className="form-label" for="typeName">
                                Cardholder's Name
                              </label>
                            </div>

                            <div className="form-outline form-white mb-4">
                              <input
                                type="text"
                                id="typeText"
                                className="form-control form-control-lg"
                                siez="17"
                                placeholder="1234 5678 9012 3457"
                                minlength="19"
                                maxlength="19"
                              />
                              <label className="form-label" for="typeText">
                                Card Number
                              </label>
                            </div>

                            <div className="row mb-4">
                              <div className="col-md-6">
                                <div className="form-outline form-white">
                                  <input
                                    type="text"
                                    id="typeExp"
                                    className="form-control form-control-lg"
                                    placeholder="MM/YYYY"
                                    size="7"
                                    id="exp"
                                    minlength="7"
                                    maxlength="7"
                                  />
                                  <label className="form-label" for="typeExp">
                                    Expiration
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-outline form-white">
                                  <input
                                    type="password"
                                    id="typeText"
                                    className="form-control form-control-lg"
                                    placeholder="&#9679;&#9679;&#9679;"
                                    size="1"
                                    minlength="3"
                                    maxlength="3"
                                  />
                                  <label className="form-label" for="typeText">
                                    Cvv
                                  </label>
                                </div>
                              </div>
                            </div>
                          </form>

                          <hr className="my-4" />

                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Subtotal</p>
                            <p className="mb-2">{cursada.price}</p>
                          </div>

                          <div className="d-flex justify-content-between">
                            
                         
                          </div>

                          <div className="d-flex justify-content-between mb-4">
                            <p className="mb-2">Total(Incl. taxes)</p>
                            <p className="mb-2">{cursada.price}</p>
                          </div>

                          <button
                            type="button"
                            className="btn btn-info btn-block btn-lg"
                          >
                            <div className="d-flex justify-content-between">
                              <span>{cursada.price}</span>
                              <button onClick={handleComprar}> 
                                Checkout{''}
                                <i className="fas fa-long-arrow-alt-right ms-2"></i>
                              </button>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
 
    </div>
 

  )
  }



    {/* <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col-auto d-none  d-lg-block">
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
  <button type="button" href="/cursadas/shopform" class="btn btn-success" onClick={handleClick}>Agregar al carrito</button>*/}
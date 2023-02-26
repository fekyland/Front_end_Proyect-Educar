import React from 'react'
import { useState, useEffect } from 'react'
import CursadaService from '../../_services/CursadaService.js'
import './CursadaDetail.scss'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import TokenStorageService from '../../_services/TokenStorageService.js'


export default function CursadaDetail() {

  const navigate = useNavigate()
  const [cursada, setCursada] = useState({})
  const { id } = useParams()
  const usuario = 'userId'
  const UserId = localStorage.getItem(usuario)
  const token = TokenStorageService.getToken()
  console.log(token)
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
  const handleComprar = () => {
    console.log("comprando..")
      buyCursada(id,UserId,token)
      navigate(`/cursadas/cursadacomprada/${cursada._id}`)
    
  }
  
  console.log(UserId)
  console.log(id)
  const buyCursada = async (id,UserId,token) => {
    
    try {
      const res = await CursadaService.buyCursada( id,UserId,token)
      console.log('compra exitosa', res.data)
    } catch (error) {
      console.log(error.message || error)
    }
  }
 
  
 
  

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

                        <div className="selector">
                          <div>
                            <p className="mb-1  ">
                            <div className="">
                              <iframe
                                src={cursada.video}
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen
                                style={{ width: '100%', height: '400px' }}
                              ></iframe>
                              <hr />
                              <p className="mb-0">{cursada.description}</p>
                              <hr />
                              </div>
                              
                            </p>
                            
                          </div>
                        
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div className="card bg-info text-white rounded-3">
                          <div className="card-body ">
                            <div className="d-flex justify-content-between align-items-center mb-4 ">
                              <h5 className="mb-0 ">
                                Compra a realizar: {cursada.title}
                              </h5>
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
                                    <label
                                      className="form-label"
                                      for="typeText"
                                    >
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

                            <div className="d-flex justify-content-between"></div>

                            <div className="d-flex justify-content-between mb-4">
                              <p className="mb-2">Total(Incl. taxes)</p>
                              <p className="mb-2">{cursada.price}</p>
                            </div>

                            <button
                              type="button"
                              className="btn btn-info btn-block btn-lg"
                            >
                              <div className="d-flex justify-content-between">
                               
                                <button onClick={handleComprar}>
                                  Buy{''}
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


  
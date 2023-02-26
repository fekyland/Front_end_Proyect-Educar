import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { environment } from '../../_enviroment/environment.js'
import { format } from 'date-fns'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import './Cursada.scss'
import CursadaService from '../../_services/CursadaService.js'
import YouTubePlayer from '../YoutubePlayer/YoutubePlayer'
import TokenStorageService from '../../_services/TokenStorageService.js'


function Cursada({ cursada }) {
  const navigate = useNavigate()
  const mail = 'userMail'
  const email = localStorage.getItem(mail)
  const id = `${cursada._id}`
  const usuario = 'userId'
  const UserId = localStorage.getItem(usuario)
  const userState = useSelector((state) => state.authReducer)
  const token = TokenStorageService.getToken()

  const [comprada, setComprada] = useState({})
  useEffect(() => {
    checkCursada()
  }, [])
  const checkCursada = async () => {
    try {
      console.log(id)
      console.log(UserId)
      const res = await CursadaService.checkCursada(id,UserId,token)
      console.log(res.data.results)
      setComprada(res.data.results)
    } catch (error) {
      console.log(error.message || error)
    }
  }

  const getCursadaDetails = (cursada) => {
    navigate(`/cursadas/cursadacomprada/${cursada._id}`)
  }

  const getYear = (date) => format(Date.parse(date), 'yyyy')

  return (
    <div className="">
      <div className="card  text-start movie-card " style={{ width: '13rem' }}>
        <div className="z-2 position-absolute p-5 rounded-3 "></div>
        <YouTubePlayer videoId={cursada.video} width="210" height="200" />
        <div className="vote-average vote-average--movie">{cursada.price}</div>
        <div className="card-body">
          <div
            className="card-title mb-2 mt-2 fs-6 fw-bold text-center"
            onClick={''}
          >
            {cursada.title}
          </div>

          <div className="release-date">{''}</div>

          {UserId ? (
            <>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  {email === `${cursada.email}` && comprada === null && (
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                      onClick={() => navigate(`/cursadas/updatecursada/${cursada._id}`)}
                    >
                      Edit
                    </button>
                  
                  )}
                </div>
                  {email !== `${cursada.email}` && (
                    <>
                      {comprada !== null ? (
                        <>
                          <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                              <button
                                type="button"
                                class="btn btn-sm btn-outline-secondary"
                                onClick={() =>
                                  navigate(
                                    `/cursadas/cursadacomprada/${cursada._id}`,
                                  )
                                }
                              >
                                Play
                              </button>
                            </div>
                          </div>
                        </>
                      ) : (
                        <div class="d-flex justify-content-between align-items-center">
                          <div class="btn-group">
                            <button
                              type="button"
                              class="btn btn-sm btn-outline-secondary"
                              onClick={() =>
                                navigate(`/cursadas/id/${cursada._id}`)
                              }
                            >
                              comprar
                            </button>
                          </div>
                        </div>
                      )}
                    </>
                  )}

                  {email === `${cursada.email}` && comprada === null && (
                    <>
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                          <button
                            type="button"
                            class="btn btn-sm btn-outline-secondary"
                            onClick={() =>
                              navigate(
                                `/cursadas/cursadacomprada/${cursada._id}`,
                              )
                            }
                          >
                            Play
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                
              </div>
            </>
          ):( <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-sm btn-outline-secondary"
              onClick={() => (navigate(`/users/login`))}
            >
             Play
          </button>          
        
          </div>
        </div>)}
        </div>
      </div>
    </div>
  )
}

Cursada.propTypes = {
  cursada: PropTypes.object.isRequired,
}

export default Cursada

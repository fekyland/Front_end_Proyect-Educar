import React from 'react'
import { useEffect, useState } from 'react'
import CursadaService from '../../_services/CursadaService'
import { useParams } from 'react-router-dom'
import TokenStorageService from '../../_services/TokenStorageService'

export default function CursadaComprada() {
  const token = TokenStorageService.getToken()
  const { id } = useParams()
  const [cursada, setCursada] = useState({})

  useEffect(() => {
    getSingleCursada()
  }, [])

  const getSingleCursada = async () => {
    try {
      const res = await CursadaService.getSingleCursada(id,token)
      setCursada(res.data.data)
      console.log('res.data.results', res.data.data)
      console.log(cursada)
    } catch (error) {
      console.log(error.message || error)
    }
  }
  return (
    <div>
      <hr></hr>
      <div class="card border border-0">
        <div class="selector ">
          <iframe
            width="100%"
            height="600"
            src={cursada.video}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <hr></hr>
        </div>
        
        <div class="card-body">
          <h5 class="card-title ">{cursada.title}</h5>
          <p class="card-text">{cursada.description}</p>
        </div>
      </div>
    </div>
  )
}

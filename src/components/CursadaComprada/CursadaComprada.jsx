import React from 'react'
import { useEffect,useState } from 'react'
import CursadaService from '../../_services/CursadaService'
import { useParams } from 'react-router-dom'

export default function CursadaComprada() {

  const idValue = useParams()
  const idString = idValue.id
  const [cursada, setCursada] = useState({})

  useEffect(() => {
   
    getSingleCursada()
    
  }, [])
  
  const getSingleCursada = async () => {
    try {
      const res = await CursadaService.getSingleCursada(idString)
      setCursada(res.data.data)
      console.log('res.data.results', res.data.data)
      console.log(cursada)
     
    } catch (error) {
      console.log(error.message || error)
    }
  }
  return (
    <div>
      
<div class="card ">
  <div class="embed-responsive embed-responsive-16by9 ">
 <iframe width="800" height="600" src={cursada.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
  <div class="card-body">
    <h5 class="card-title ">{cursada.title}</h5>
    <p class="card-text">{cursada.description}</p>
  </div>
</div>

    </div>
  )
}

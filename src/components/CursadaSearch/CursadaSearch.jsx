import React from 'react'
import { useParams } from 'react-router-dom'
import CursadaService from '../../_services/CursadaService'
import { useState,useEffect } from 'react'
import Cursada from '../Cursada/Cursada'


export default function CursadaSearch({}) {
    const { search }= useParams()
 const [cursadas, setCursadas] = useState({})


console.log(cursadas)
 useEffect(() => {
    searchByTitle(search)
 }, [])
 
    const searchByTitle = async (search) => {
        try {
          const res = await CursadaService.searchByTitle(search)
          setCursadas(res.data.data)
          console.log('res.data.data', res.data)
        } catch (error) {
          console.log(error.message || error)
        }
      }

  return (
    <div className="cursada-list">
    <div className="container pt-5 pb-5 ">
      <h1 className="h1  mb-5 ">Busqueda</h1>

      <div className="d-flex flex-wrap justify-content-center gap-5 mb-5">
        {cursadas.length > 0 &&
          cursadas.map((cursada) => <Cursada key={cursadas._id} cursada={cursada} />)}
      </div>
    </div>
  </div>
  )
}

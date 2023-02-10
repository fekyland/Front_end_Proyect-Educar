import React from 'react'
import { useParams } from 'react-router-dom'
import CursadaService from '../../_services/CursadaService'
import { useState,useEffect } from 'react'
import Cursada from '../Cursada/Cursada'


export default function CursadaSearch({}) {
    const title = useParams()
 const [cursadas, setCursadas] = useState({})
console.log(title)
const valorString = title.search
console.log(valorString)
console.log(cursadas)
 useEffect(() => {
    searchByTitle(valorString)
 }, [])
 
    const searchByTitle = async (valorString) => {
        try {
          const res = await CursadaService.searchByTitle(valorString)
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

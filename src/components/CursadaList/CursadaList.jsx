import React, { useEffect, useState } from 'react'
import CursadaService from '../../_services/CursadaService'
import Cursada from '../Cursada/Cursada'
import { useSelector } from 'react-redux'

export default function CursadaList() {
  const [cursadas, setCursadas] = useState([])
const user = useSelector((state) => state.authReducer)
console.log(user)
  useEffect(() => {
    getAllCursadas()
  }, [])

  const getAllCursadas = async () => {
    try {
      const res = await CursadaService.getAllCursadas()
      console.log(res)
      setCursadas(res.data.results)
      console.log(cursadas)

      //setCursadas(res.data)
      console.log(res.data)
    } catch (error) {
      console.log(error.message || error)
    }
  }

  return (
    <div className="cursada-list">
      <div className="container pt-5 pb-5 ">
        <h1 className="h1  mb-5 ">Create and learn...</h1>

        <div className="d-flex flex-wrap justify-content-center gap-5 mb-5">
          {cursadas.length > 0 &&
            cursadas.map((cursada) => <Cursada key={cursada.id} cursada={cursada} />)}
        </div>
      </div>
    </div>
  )
}

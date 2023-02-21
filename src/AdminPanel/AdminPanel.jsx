import React, { useEffect, useState } from 'react'
import UserService from '../_services/UserService'
import CursadaService from '../_services/CursadaService'
import TokenStorageService from '../_services/TokenStorageService'
import { Navigate, useNavigate } from 'react-router-dom'
import { logout } from '../Redux/UserReducer'
import { useDispatch } from 'react-redux'


export default function Admin() {
  const navigate = useNavigate()
  const token = TokenStorageService.getToken()
  const dispatch = useDispatch()
  
  const [cursadas, setCursadas] = useState([])
  const [users, setUsers] = useState([])
  const Id = `${cursadas.id}`

  console.log(token)
  useEffect(() => {
    getAllUsers(token)
    getAllCursadas()
 
  }, [])
 
 
 
 
  // functions definition
  const getAllUsers = async () => {
    const res = await UserService.getAllUsers(token)
    try {
      setUsers(res.data.data)
      console.log(res)
      console.log(setUsers)
    } catch (error) {
      console.log(error.message || error)
    }
  }
  const getAllCursadas = async () => {
    const res = await CursadaService.getAllCursadas()
    try {
      console.log('res.data.results', res.data.results)
      setCursadas(res.data.results)
    } catch (error) {}
  }

  const handleDelete = async (userToDelete) => {
    const res = await UserService.deleteUser(userToDelete)
    console.log(res)
    await getAllUsers(token)
    console.log(users)
  }

const handleDeleteCursada = async (cursadaToDelete) => {
    const res = await CursadaService.deleteCursadaById(cursadaToDelete)
    console.log(res)
    await getAllCursadas(token)
    console.log(cursadas)
  }
  const handleLogout = () => {
    TokenStorageService.logOut()
    dispatch(logout())
    navigate('/cursadas')
    navigate('/')
  }
 const onHandleVerCursada = (curso) =>{
    navigate(`/cursadas/cursadacomprada/${curso._id}`)
 }
  return (
    <div>
      <h1>Admin dashboard</h1>

      <div>
       

      <button type="button" class="btn btn-success" onClick={handleLogout}>
        Logout{' '}
      </button>
      <h2>Users</h2>

      <div className='border-primary'>
        {users?.map((user) => (
          <div className="container-fluid" key={user._id}>
            <div className="row ">
              <div className="col">User: {user.name}</div>
              <div className="col">Mail: {user.email}</div>
              <div className="col">Role: {user.role}</div>
              <div className="col admin-buttons">
                <button
                  
                  type="button"
                  className="btn btn-danger "
                  onClick={() => {
                    handleDelete(user)
                  }}
                >
                  borrar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

       <h2>Courses</h2>
      {cursadas?.map((curso) => (
          <div className="container" key={curso._id}>
            <div className="row">
              <div className="col">User: {curso.email}</div>
              <div className="col">Titulo: {curso.title}</div>
              <div className="col admin-buttons">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    handleDeleteCursada(curso)
                  }}
                >
                  borrar
                </button>
                
              </div>
              <div className="col-2 admin-buttons">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => {
                   onHandleVerCursada(curso)
                  }}
                >
                  ver
                </button>
                
              </div>
            </div>
          </div>
        ))}
                </div>
    </div>
  )
}

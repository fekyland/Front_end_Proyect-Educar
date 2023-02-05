import React from 'react'
import { useNavigate } from 'react-router-dom'
import TokenStorageService from '../../_services/TokenStorageService'

export default function UserPanel() {

const navigate = useNavigate()

    const handleLogout = () => {
        TokenStorageService.logOut()
        navigate('/')
      }
  return (
    <div>
        <h1>UserPanel</h1>
        <button type="button" class="btn btn-success" onClick={handleLogout}>
        Logout{' '}</button>
    
    </div>
  )
}

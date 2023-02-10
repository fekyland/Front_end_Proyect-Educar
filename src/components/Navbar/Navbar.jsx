import React from 'react'
import logo from '../../assets/albert-einstein.svg'
import { useSelector } from 'react-redux'
import  TokenStorageService  from "../../_services/TokenStorageService.js"
import { useNavigate } from 'react-router-dom'
import CursadaService from '../../_services/CursadaService'
import { useState } from 'react'

export default function Navbar() {
  const userName = 'userName'
  const user = localStorage.getItem(userName)
  const userRole = 'userRole'
  const userAdmin = localStorage.getItem(userRole)
  const navigate = useNavigate()
  
  console.log(user)



    const [title, setTitle] = useState("");
   console.log(title)
    const handleSubmit = (e) => {
      e.preventDefault()
      navigate(`/cursadas/search/${title}`)
    };

    
  const handleLogout = () => {
    TokenStorageService.logOut()
    localStorage.clear()
    //dispatch(logout())
    //dispatch(limpiarCursadas())
    navigate('/cursadas')
  }




  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-primary bg-light fs-6">
        <div className="container-fluid">
          <a className="navbar-brand" href="/cursadas">
            <img
              src={logo}
              alt=""
              width="100"
              height="100"
              className="d-inline-block align-text-top"
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/cursadas"
                >
                  Educar
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Usuarios
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/login">
                      Login
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/registeruser">
                      Register
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    {userAdmin === "super_admin" ? ( <a className="dropdown-item" href="/paneladmin">
                      Admin panel
                    </a>):( <a className="dropdown-item" href="/paneluser">
                     User panel
                    </a>)}
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link ">Bienvenido {user}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link "></a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="text"
                placeholder="Ingresa la busqueda"
                value={title}
                aria-label="Search"
                onChange={(e) => setTitle(e.target.value)}
              />
              <button className="btn btn-outline-success" type="submit" onClick={handleSubmit}>
                Search
              </button>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {user ?(
                  <>
              <li className="nav-item">
              <a className="nav-link "></a>
              </li>
              <li className="nav-item">
              <a className="nav-link" onClick={() => handleLogout()} >Logout</a>
              </li>
              </>
              ):(
                <>
                 <li className="nav-item">
              <a className="nav-link "></a>
              </li>
              <li className="nav-item">
              <a className="nav-link "></a>
              </li>
              </>)
              }
            </ul>
            </form>
          
          </div>
        </div>
      </nav>
    </div>
  )
}

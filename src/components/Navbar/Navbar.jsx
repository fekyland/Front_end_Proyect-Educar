import React from 'react'
import logo from '../../assets/albert-einstein.svg'
import { useSelector } from 'react-redux'
import TokenStorageService from '../../_services/TokenStorageService.js'
import { useNavigate } from 'react-router-dom'
import CursadaService from '../../_services/CursadaService'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { logout } from '../../Redux/UserReducer'
import { useDispatch } from 'react-redux'

export default function Navbar() {
  const { username, status, type } = useSelector((state) => state.authReducer)
  const userName = 'userName'
  const user = localStorage.getItem(userName)

  const userRole = 'userRole'
  const userAdmin = localStorage.getItem(userRole)
  
  const navigate = useNavigate()
  const dispatch = useDispatch()

  let activeClassName = 'activeNav'
  const setNavLinkClassName = ({ isActive }) => {
    const className = ['nav-link', isActive ? activeClassName : undefined].join(
      ' ',
    )

    return className
  }

  console.log(user)

  const [title, setTitle] = useState('')
  console.log(title)
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/cursadas/search/${title}`)
  }

  const handleLogout = () => {
    dispatch(logout())
    TokenStorageService.logOut()
    localStorage.clear()

    //dispatch(limpiarCursadas())
    navigate('/cursadas')
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg border border-success bg-light bg-gradient  fs-6 ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/cursadas">
            <img
              src={logo}
              alt=""
              width="50"
              height="50"
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
                <NavLink to="/cursadas" className={setNavLinkClassName} end>
                  Courses
                </NavLink>
              </li>

              <li className="nav-item">
                {user ? null : (<a className="nav-link" href="/users/login">
                    Login
                  </a>
                  
                )}
              </li>
              <li className="nav-item">
              {user ? null : (<a className="nav-link" href="/users/registeruser">
                    Register
                  </a>
                  
                )}
              </li>
              <li className="nav-item">
                {status && (
                 
                  <NavLink to="/cursadas/registercursada" className={setNavLinkClassName} end>
                  Make your Classroom
                </NavLink>
                ) }
              </li>
              <li>
                {userAdmin === 'super_admin' && (
                   <NavLink to="/users/adminpanel" className={setNavLinkClassName} end>
                   Admin panel
                 </NavLink>
                )}
              </li>
              <li>
              {userAdmin === 'user' && (
                <NavLink to="/users/userpanel" className={setNavLinkClassName} end>
                UserPanel
              </NavLink>
              )}
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
                placeholder="Find my course"
                value={title}
                aria-label="Search"
                onChange={(e) => setTitle(e.target.value)}
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                onClick={handleSubmit}
              >
                Search
              </button>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {user ? (
                  <>
                    <li className="nav-item">
                      <a className="nav-link "></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" onClick={() => handleLogout()}>
                        Logout
                      </a>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <a className="nav-link "></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link "></a>
                    </li>
                  </>
                )}
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

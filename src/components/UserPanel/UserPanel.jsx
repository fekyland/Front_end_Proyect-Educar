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
      <div className="container">
        <h1>UserPanel</h1>
        <div className="row">
          <div className="col-sm-6">
            <h1>Mis Cursadas</h1>
            <div className="row">
              <div className="col-sm-6">
                <h2>Videos</h2>
                <div className="row">item.video</div>
              </div>
              <div className="col-sm-6">
                <h2>titulo</h2>
                <div className="row">item.title</div>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-sm-3">
                  {' '}
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={""}
                  >
                    Reprucir
                  </button>
                </div>
                <div className="col-sm-3">
                  {' '}
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={""}
                  >
                    Editar
                  </button>
                </div>
                <div className="col-sm-3">
                  {' '}
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={""}
                  >
                    Borrar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <h1>Cursadas compradas </h1>
            <div className="row">
              <div className="col-sm-6">
                <h2>Videos</h2>
                <div className="row">item.video</div>
              </div>
              <div className="col-sm-6">
                <h2>titulo</h2>
                <div className="row">item.titulo</div>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-sm-3">
                  {' '}
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={""}
                  >
                    Reprucir
                  </button>
                </div>
                <div className="col-sm-3">
                  {' '}
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={""}
                  >
                    Editar
                  </button>
                </div>
                <div className="col-sm-3">
                  {' '}
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={""}
                  >
                    Borrar
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12">
          <button
            type="button"
            className="btn btn-success"
            onClick={handleLogout}
          >
            Logout{' '}
          </button>
          </div>
        </div>
      </div>
    </div>
  )
}

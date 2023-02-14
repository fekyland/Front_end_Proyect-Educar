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
            <h6>Mis Cursadas</h6>
            <div className="row">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Primero</th>
                    <th scope="col">Último</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                </tbody>
              </table>
              <div className="row d-flex justify-content-center">
                <div className="col-sm-3">
                  {' '}
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={''}
                  >
                    Reprucir
                  </button>
                </div>
                <div className="col-sm-3">
                  {' '}
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={''}
                  >
                    Editar
                  </button>
                </div>
                <div className="col-sm-3">
                  {' '}
                  <button type="button" className="btn btn-danger" onClick={''}>
                    Borrar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <h6>Cursadas compradas </h6>
            <div className="row">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Primero</th>
                    <th scope="col">Último</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                </tbody>
              </table>
              <div className="row d-flex justify-content-center">
                <div className="col-sm-3">
                  {' '}
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={''}
                  >
                    Reprucir
                  </button>
                </div>
                <div className="col-sm-3">
                  {' '}
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={''}
                  >
                    Editar
                  </button>
                </div>
                <div className="col-sm-3">
                  {' '}
                  <button type="button" className="btn btn-danger" onClick={''}>
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

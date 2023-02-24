import { useNavigate } from 'react-router-dom'
import AuthService from '../_services/AuthService'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { validateLoginFormValues } from '../_helpers/form-utilities'
import TokenStorageService from '../_services/TokenStorageService'


export default function UserUpdate() {
  const userMail = 'userMail'
  const userName = 'userName'
  const localMail = localStorage.getItem(userMail)
  console.log(localMail)
  const localName = localStorage.getItem(userName)
  console.log(localName)
  const token = TokenStorageService.getToken()
  const { id } = useParams()
  const navigate = useNavigate()

  const [formValues, setFormValues] = useState({
    email: localMail,
    name: localName,
    password: '',
  })
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const contenido = {
      id: id,
      email: formValues.email,
      name: formValues.name,
      password: formValues.password,
    }
    // verificar que no hay error
    verificacion(contenido)
    console.log('useEffect', formErrors)
  }, [formErrors])

  const verificacion = (contenido) => {
    if (Object.keys(formErrors).length == 0 && isSubmit) {
      console.log('Actualizando user...')
      register(contenido,token)
    }
  }

  const register = async (contenido,token) => {
    try {
      console.log('entre a actualizar')
      const res = await AuthService.updateData(contenido,token)
      console.log(res.data)
      console.log('cerrando cesion')
      localStorage.clear()
      navigate('/users/login')
    } catch (error) {
      console.log(error)
    }
  }
  // handlers
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({
      ...formValues,

      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
    setFormErrors(validateLoginFormValues(formValues))
    console.log('handle', formErrors)
    setIsSubmit(true)
  }

  return (
    <div>
      <div className="container pt-5 col-lg-3">
        <h2>User update profile</h2>
        <form className="text-start" noValidate onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="name"
              name="name"
              className="form-control"
              value={formValues.name}
              onChange={handleChange}
            />
            <div className="form-text form-text-error">{formErrors.name}</div>
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formValues.email}
              onChange={handleChange}
            />
            <div className="form-text form-text-error">{formErrors.email}</div>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={formValues.password}
              onChange={handleChange}
            />
            <div className="form-text form-text-error">
              {formErrors.password}
            </div>
          </div>
          <div className="d-grid gap-2">
            <button
              type="submit"
              className="btn btn-primary text-white fw-bold"
            >
              Update profile
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

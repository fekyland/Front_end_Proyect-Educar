import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthService from '../../_services/AuthService'
import './Login.scss'
import TokenStorageService from '../../_services/TokenStorageService'
import { validateLoginFormValues } from '../../_helpers/form-utilities'
import { useSelector, useDispatch } from 'react-redux'
import { login as loginuser } from '../../Redux/UserReducer'




export default function Login() {

    const initialValues = {
        email: '',
        password: '',
      }
  
    const navigate = useNavigate()
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const dispatch = useDispatch()
    const statuslogin = useSelector(loginuser)
    console.log(statuslogin)
  
    useEffect(() => {
    const credentials = {
        email: formValues.email,
        password: formValues.password,
      }
      // verificar que no hay error
      if (Object.keys(formErrors).length == 0 && isSubmit) {
        //verifica el objeto con if
        console.log('LOGIN...')
        login(credentials) //hago la consulta de
      }
      console.log('useEffect', formErrors)
    }, [formErrors])

    const login = async (credentials) => {
        //funcion  async login
        try {
          const res = await AuthService.login(credentials)
          console.log(res.data)
          console.log(res.data.id)
          console.log(res.data.token)
          TokenStorageService.saveToken(res.data.token)
          localStorage.setItem("userId",res.data.id)
          localStorage.setItem("userName",res.data.name)   
          localStorage.setItem("userRole",res.data.role)
          localStorage.setItem("userMail",res.data.email)
          res.data.username = credentials.email
          dispatch(loginuser(res.data))
        if (res.data.message === 'User Logged as SUPER_ADMIN') {
            navigate('/users/adminpanel')
         } else {
            navigate('/cursadas')
          }
        } catch (error) {
          console.log(error)
        }
      }
  
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
    <div className="container col-lg-3 col-md-5 col-sm-5">
     <div className="container-bkground pt-5 p-5 mt-5 border rounded">
    <h2>Login</h2>

    {/*<pre className="text-start">
      {JSON.stringify(formValues, undefined, 2)}
    </pre>*/}
   
    <form className="text-start" noValidate onSubmit={handleSubmit}>
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
          Submit
        </button>
      </div>
    </form>
  </div>
  </div>
  </div>
  )
}

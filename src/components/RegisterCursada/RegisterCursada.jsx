import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { validateCursadaFormValues } from '../../_helpers/form-utilities'
import CursadaService from '../../_services/CursadaService.js'



const userMail = 'userMail';
const userName = 'userName';
const localMail = localStorage.getItem(userMail)
console.log(userMail)
const localName = localStorage.getItem(userName)
export default function RegisterCursada() {

  const initialValues = {
    title: '',
    video: '',
    description:'',
    price:''
  }
  // hooks
  const navigate = useNavigate()

  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  useEffect(() => {
    const contenido = {
      email: localMail,
      name: localName,
      title: formValues.title,
      video: formValues.video,
      description: formValues.description,
      price:formValues.price,
      
    }
    // verificar que no hay error
    verificacion(contenido)
    console.log('useEffect', formErrors)
  }, [formErrors])

  const verificacion = (contenido) => {
    if (Object.keys(formErrors).length == 0 && isSubmit) {
      console.log('Registrando curso...')
      register(contenido)
    }
  }

  const register = async (contenido) => {
    try {
      const res = await CursadaService.register(contenido)
      console.log(res.data)
      navigate('/cursos')
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
      setFormErrors(validateCursadaFormValues(formValues))
      console.log('handle', formErrors)
      setIsSubmit(true)
    }

  return (
    <div>
      <div className="container pt-5 col-lg-3">
        <div>
          <h1>CREAR CURSADA</h1>
        </div>
        <form className="text-start" noValidate onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Nombre del Curso
          </label>
          <input
            type="title"
            name="title"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Titulo"
            value={formValues.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            {' '}
            Insertar video
          </label>
          <input
            type="video"
            name="video"
            value={formValues.video}
            onChange={handleChange}
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Id video"
          />
          <div className="form-text form-text-error">{formErrors.video}</div>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Descripcion del video
          </label>
          <textarea
            type="description"
            name="description"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={formValues.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            {' '}
            Precio
          </label>
          <input
            type="price"
            name="price"
            value={formValues.price}
            onChange={handleChange}
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Precio"
          />
          <div className="form-text form-text-error">{formErrors.price}</div>
        </div>
        <button type="submit" class="btn btn-primary">
          Crear Curso
        </button>
        </form>
      </div>
      
    </div>
  )
}

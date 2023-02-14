import axios from 'axios'
import { environment } from '../_enviroment/environment'

const CursadaService = {} //objeto vacio


CursadaService.getAllCursadas = async (page = 1) => {
  //objeto.metodo
  const apiUrl = `${environment.BASE_API_URL}/cursadas`

  return await axios.get(apiUrl)
}

CursadaService.getSingleCursada = async (id) => {
  const apiUrl = `${environment.BASE_API_URL}/cursadas/id/${id}`

  return await axios.get(apiUrl)
}

CursadaService.register = async (Cursada) => {
  const ApiUrl = `${environment.BASE_API_URL}`
  return await axios.post(ApiUrl + '/cursadas/registercurso', {
    //hago un post a register con un body de usuario mail y password
    name: Cursada.name,
    email: Cursada.email,
    title: Cursada.title,
    description: Cursada.description,
    video: "https://www.youtube.com/embed/"+ Cursada.video,
    price:Cursada.price
  })
}

CursadaService.searchByTitle = async (valorString) => {
  const apiUrl = `${environment.BASE_API_URL}/cursadas/search/${valorString}`

  return await axios.get(apiUrl)
}


export default CursadaService

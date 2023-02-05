import axios from 'axios'
import { environment } from '../_environmets/environment'

const CourseService = {} //objeto vacio

MovieService.getAllCursadas = async (page = 1) => {
  //objeto.metodo
  const apiUrl = `${environment.BASE_API_URL}/courses`

  return await axios.get(apiUrl)
}

MovieService.getSingleCursada = async (id) => {
  const apiUrl = `${environment.BASE_API_URL}/movies/id/${id}`

  return await axios.get(apiUrl)
}

export default MovieService

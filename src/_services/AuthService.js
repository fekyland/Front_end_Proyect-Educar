import axios from 'axios'
import { environment } from '../_enviroment/environment.js'

const AuthService = {}

const authApiUrl = environment.BASE_API_URL + '/auth'

AuthService.login = async (credentials) => {
  return await axios.post(authApiUrl + '/login', {
    //hago un post a login con un body de  email y password
    email: credentials.email,
    password: credentials.password,
  })
}

AuthService.register = async (user) => {
  return await axios.post(authApiUrl + '/register', {
    //hago un post a register con un body de usuario mail y password
    name: user.name,
    email: user.email,
    password: user.password,
  })
}

AuthService.updateData = async (contenido) => {
  const ApiUrl = `${environment.BASE_API_URL}`
  return await axios.put(ApiUrl + '/auth/updateuser', {
    //hago un post a register con un body de usuario mail y password
    id: contenido.id,
    name: contenido.name,
    email: contenido.email,
    password:contenido.password
    
  })
}

export default AuthService

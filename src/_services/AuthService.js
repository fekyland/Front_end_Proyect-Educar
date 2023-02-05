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

export default AuthService

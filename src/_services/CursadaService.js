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
    video: Cursada.video,
    price:Cursada.price,
    
  })
}

CursadaService.searchByTitle = async (valorString) => {
  const apiUrl = `${environment.BASE_API_URL}/cursadas/search/${valorString}`

  return await axios.get(apiUrl)
}

CursadaService.buyCursada = async (Id,userId) => {
  try {
    const apiURL = `${environment.BASE_API_URL}/cursadas/${Id}/order/${userId}`
    return await axios.patch(apiURL)
  } catch (error) {
    console.log(error);
  }
};

CursadaService.findByEmail = async (email) => {
  try {
    const apiUrl = `${environment.BASE_API_URL}/cursadas/miscursos/${email}`

  return await axios.get(apiUrl)
  } catch (error) {
    
  }
}
CursadaService.findBuyersById = async (UserId) => {

  const apiUrl = `${environment.BASE_API_URL}/cursadas/compradas/${UserId}`
  return await axios.get(apiUrl)
}
 
CursadaService.checkCursada = async (id,UserId) => {
  const apiUrl = `${environment.BASE_API_URL}/cursadas/${id}/comprobar/${UserId}`
  return await axios.get(apiUrl)
} 

CursadaService.deleteCursadaById = async (curso) => {
  try {
    const apiURL = `${environment.BASE_API_URL}/cursadas/delete/${curso._id}`;
    const res = await axios.delete(apiURL);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default CursadaService

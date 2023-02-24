import axios from 'axios'
import { environment } from '../_enviroment/environment'

const CursadaService = {} //objeto vacio


CursadaService.getAllCursadas = async (page = 1) => {
  //objeto.metodo
  const apiUrl = `${environment.BASE_API_URL}/cursadas`

  return await axios.get(apiUrl)
}

CursadaService.getSingleCursada = async (id,token) => {
  try{
  const apiUrl = `${environment.BASE_API_URL}/cursadas/id/${id}`
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  }
 
  return await axios.get(apiUrl,config)
}catch (error) {
  console.log(error);
}
}
CursadaService.register = async (token,contenido) => {
  const ApiUrl = `${environment.BASE_API_URL}`
  
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  }
  
  return await axios.post(ApiUrl + '/cursadas/registercurso', {
    //hago un post a register con un body de usuario mail y password
    name: contenido.name,
    email: contenido.email,
    title: contenido.title,
    description: contenido.description,
    video: `https://www.youtube.com/embed/` + contenido.video,
    price: contenido.price,
    
  },config)
}

CursadaService.updateData = async (cursada,token) => {
  const ApiUrl = `${environment.BASE_API_URL}`

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  }

  return await axios.put(ApiUrl + '/cursadas/updatecurso', {
    //hago un post a register con un body de usuario mail y password
    id:cursada.id,
    name: cursada.name,
    email: cursada.email,
    title: cursada.title,
    description: cursada.description,
    video: `https://www.youtube.com/embed/` + cursada.video,
    price:cursada.price,
    
  },config)
}

CursadaService.searchByTitle = async (id) => {
  const apiUrl = `${environment.BASE_API_URL}/cursadas/search/${id}`
  
  
  return await axios.get(apiUrl)
}

CursadaService.buyCursada = async (id,userId,token) => {
console.log(id)
console.log(userId)
console.log(token)
  try {
   
    const apiURL = `${environment.BASE_API_URL}/cursadas/${id}/order/${userId}`
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    }
  
    return await axios.patch(apiURL,config)
  } catch (error) {
    console.log(error);
  }
};

CursadaService.findByEmail = async (email,token) => {
  try {
    const apiUrl = `${environment.BASE_API_URL}/cursadas/miscursos/${email}`
    
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    }

  return await axios.get(apiUrl,config)
  } catch (error) {
    
  }
}
CursadaService.findBuyersById = async (UserId,token) => {
try{
  const apiUrl = `${environment.BASE_API_URL}/cursadas/compradas/${UserId}`
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  }
  return await axios.get(apiUrl,config)
 } catch (error) {
  console.log(error);
 }
}
CursadaService.checkCursada = async (id,UserId,token) => {
 try { const apiUrl = `${environment.BASE_API_URL}/cursadas/${id}/comprobar/${UserId}`
     
      const config = {
      headers: { Authorization: `Bearer ${token}` },
       }
  return await axios.get(apiUrl,config)
} catch (error) {
  console.log(error);
}
}

CursadaService.deleteCursadaById = async (curso,token) => {
  try {
    const apiURL = `${environment.BASE_API_URL}/cursadas/delete/${curso._id}`;
    const res = await axios.delete(apiURL);
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    }
    return (res.data ,config);
  } catch (error) {
    console.log(error);
  }
};

export default CursadaService

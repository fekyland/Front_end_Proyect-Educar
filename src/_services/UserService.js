import axios from 'axios'
import { environment } from '../_enviroment/environment'

const UserService = {}

UserService.getAllUsers = async (token) => {
  const apiUrl = environment.BASE_API_URL + '/users'

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  }

  return await axios.get(apiUrl, config)
}
UserService.getById = async (token) => {
  const apiUrl = environment.BASE_API_URL + '/id'

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  }

  return await axios.get(apiUrl, config)
}


UserService.buyCursada = async (userId,Id,contenido) => {
  try {
    const apiURL = `${environment.BASE_API_URL}/users/${userId}/rent/${Id}`
    return await axios.patch(apiURL,{
      //hago un post a register con un body de usuario mail y password
      id:Id,
      name: contenido.name,
      email: contenido.email,
      title: contenido.title,
      description: contenido.description,
      video: "https://www.youtube.com/embed/"+ contenido.video
    })
  } catch (error) {
    console.log(error);
  }
};

UserService.deleteUser = async (user) => {
  try{
     const apiUrl = `${environment.BASE_API_URL}/users/delete/${user._id}`;
     const res = await axios.delete(apiUrl);

     return res.data;

  }catch (error){
     console.log(error);

  }
};

export default UserService

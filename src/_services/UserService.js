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
UserService.rentCursada = async (userId, movieId) => {
  try {
    const apiURL = `${environment.BASE_API_URL}/users/${userId}/rent/${movieId}`
    return await axios.patch(apiURL),{
      //hago un post a register con un body de usuario mail y password
      name: Cursada.name,
      email: Cursada.email,
      title: Cursada.title,
      description: Cursada.description,
      video: "https://www.youtube.com/embed/"+ Cursada.video
    }
  } catch (error) {
    console.log(error);
  }
};
UserService.deleteMovie = async (userId, movieId) => {
  try {
    const apiURL = `${environment.BASE_URL}/users/${userId}/delete/${movieId}`;
    const res = await axios.patch(apiURL);

    return res.data;
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

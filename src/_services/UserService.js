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


UserService.deleteUser = async (user,token) => {
  try{
     const apiUrl = `${environment.BASE_API_URL}/users/delete/${user._id}`;
     const res = await axios.delete(apiUrl);
     const config = {
      headers: { Authorization: `Bearer ${token}` },
    }

     return (res.data , config);

  }catch (error){
     console.log(error);

  }
};

export default UserService

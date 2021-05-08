import axios from 'axios';
import {config} from '../functions';
const env = config();

class UserService {
  public loginUser(payload: {username: string, password: string}) {
    return axios.post(`${env.serverEndpoint}/user/login`, payload);
  }
}

const userService = new UserService();

export {userService}

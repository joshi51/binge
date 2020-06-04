import axios from 'axios';
import {config} from '../functions';
const env = config();

export class UserService {
  public loginUser(payload: {username: string, password: string}) {
    return axios.post(`${env.serverEndpoint}/user/login`, payload);
  }
}

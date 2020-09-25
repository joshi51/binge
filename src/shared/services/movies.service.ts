import axios from 'axios';
import {config} from '../functions';
const env = config();

export class MoviesService {
  public getMovie(id: number) {
    return axios.get(`${env.serverEndpoint}/movie/${id}`);
  }
  
  public getMoviesByGenre(genreId: string) {
    return axios.get(`${env.serverEndpoint}/movie/genre/${genreId}`);
  }
  
  public getMovies(movieIds: number[]) {
    return axios.post(`${env.serverEndpoint}/movies`, {movieIds});
  }
  
  public getMoviesByTitle(movieTitles: string[]) {
    return axios.post(`${env.serverEndpoint}/movies-by-title`, {movieTitles});
  }
  
  public getMovieRecommendations(title: string) {
    return axios.post(`${env.pythonServerEndpoint}/search`, {name: title});
  }
}

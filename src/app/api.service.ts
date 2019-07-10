import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {}

  getImagePath(posterPath: string): string{
    return environment.urlImageApi+posterPath;
  }

  getPopular(): Promise<any>{
    // https://api.themoviedb.org/3/movie/popular?api_key=c55603a6d0320ce9d6f18ef4abb3932b

    return this.httpClient.get(
      `${environment.urlApi}/3/movie/popular`,
      {
        params:{ 
          api_key: environment.apiKey
        }
      }
    ).toPromise()
    .then(data => data)
    .catch(error => {console.log(error)})

  }

  getMovie(movie_id: number): Promise<any>{
    // https://api.themoviedb.org/3/movie/429617?api_key=c55603a6d0320ce9d6f18ef4abb3932b

    return this.httpClient.get(
      `${environment.urlApi}/3/movie/${movie_id}`,
      {
        params:{ 
          api_key: environment.apiKey
        }
      }
    ).toPromise()
    .then(data => data)
    .catch(error => {console.log(error)})

  }

}

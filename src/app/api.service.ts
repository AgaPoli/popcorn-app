import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PopularMoviesResultType } from './Types/popular.movies.result';
import { MovieListType } from './Types/movie.list.type';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {}

  getImagePath(posterPath: string): string{
    return environment.urlImageApi+posterPath;
  }

  getPopular(): Observable<PopularMoviesResultType>{
    // https://api.themoviedb.org/3/movie/popular?api_key=c55603a6d0320ce9d6f18ef4abb3932b

    return this.httpClient.get(
      `${environment.urlApi}/3/movie/popular`,
      {
        params:{ 
          api_key: environment.apiKey
        }
      }
    ).pipe(
      map((data) => {
        return data as PopularMoviesResultType;
      })
    );
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

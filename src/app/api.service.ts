import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from './models/movie.model';
import { GenreType } from './models/genre.type';
import { SearchType } from './models/search.type';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    public activeCategory = new BehaviorSubject<SearchType>({
        category: 'popular'
    });

    constructor(private httpClient: HttpClient) {}

    updateMovies(): Observable<SearchType> {
        return this.activeCategory.asObservable();
    }

    getImagePath(posterPath: string): string {
        return environment.urlImageApi + posterPath;
    }

    getPopular(): Promise<any> {
        // https://api.themoviedb.org/3/movie/popular?api_key=c55603a6d0320ce9d6f18ef4abb3932b

        return this.httpClient
            .get(`${environment.urlApi}/3/movie/popular`, {
                params: {
                    api_key: environment.apiKey
                }
            })
            .toPromise()
            .then(data => data)
            .catch(error => {
                return null;
            });
    }

    getMovie(movie_id: number): Promise<Movie | null> {
        return this.httpClient
            .get(`${environment.urlApi}/3/movie/${movie_id}`, {
                params: {
                    api_key: environment.apiKey
                }
            })
            .toPromise()
            .then(data => data)
            .catch(error => {
                return null;
            });
    }

    searchMovie(original_title: string): Promise<any> {
        return this.httpClient
            .get(`${environment.urlApi}/3/search/movie`, {
                params: {
                    api_key: environment.apiKey,
                    query: original_title
                }
            })
            .toPromise()
            .then(data => data)
            .catch(error => {
                return null;
            });
    }
    searchPerson(name: string): Promise<any> {
        return this.httpClient
            .get(`${environment.urlApi}/3/search/person`, {
                params: {
                    api_key: environment.apiKey,
                    query: name
                }
            })
            .toPromise()
            .then(data => data)
            .catch(error => {
                return null;
            });
    }

    searchUpcoming(): Promise<any> {
        return this.httpClient
            .get(`${environment.urlApi}/3/movie/upcoming`, {
                params: {
                    api_key: environment.apiKey
                }
            })
            .toPromise()
            .then(data => data)
            .catch(error => {
                return null;
            });
    }

    topRated(): Promise<any> {
        return this.httpClient
            .get(`${environment.urlApi}/3/movie/top_rated`, {
                params: {
                    api_key: environment.apiKey
                }
            })
            .toPromise()
            .then(data => data)
            .catch(error => {
                return null;
            });
    }

    getGenreForMovies(): Promise<any> {
        return this.httpClient
            .get(`${environment.urlApi}/3/genre/movie/list`, {
                params: {
                    api_key: environment.apiKey
                }
            })
            .toPromise()
            .then(data => data);
    }

    getSpecifyMovies(with_genres: number = 18): Promise<any> {
        return this.httpClient
            .get(`${environment.urlApi}/3/discover/movie`, {
                params: {
                    api_key: environment.apiKey,
                    with_genres: with_genres.toString()
                }
            })
            .toPromise()
            .then(data => data);
    }
}

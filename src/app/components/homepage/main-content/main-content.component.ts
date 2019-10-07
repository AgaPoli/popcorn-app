import { Component, OnInit, OnDestroy, OnChanges, Input } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { environment } from 'src/environments/environment';
import { PopularMoviesResultType } from 'src/app/models/popular.movies.result';
import { MovieListType } from 'src/app/models/movie.list.type';
import { SearchType } from 'src/app/models/search.type';

@Component({
    selector: 'app-main-content',
    templateUrl: './main-content.component.html',
    styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
    movies: MovieListType[];
    activeCategory: string;

    constructor(private apiService: ApiService) {}

    ngOnInit() {
        this.apiService.updateMovies().subscribe(data => this.handler(data));
    }

    handler(data: SearchType): void {
        if (data.category != null) {
            this.getMoviesByCategory(data.category).then(movies => {
                this.movies = movies;
            });
        } else if (data.genre != null) {
            this.getMoviesByGenre(data.genre).then(movies => {
                this.movies = movies;
            });
        }
    }
    getMoviesByGenre(genere: number) {
        return this.apiService.getSpecifyMovies(genere).then((data: PopularMoviesResultType) => {
            return data.results;
        });
    }

    getMoviesByCategory(category: string = ''): Promise<MovieListType[]> {
        switch (category) {
            case 'topRated':
                return this.apiService.topRated().then((data: PopularMoviesResultType) => {
                    return data.results;
                });

            case 'upcoming':
                return this.apiService.searchUpcoming().then((data: PopularMoviesResultType) => {
                    return data.results;
                });

            case 'popular':
            default:
                return this.apiService.getPopular().then((data: PopularMoviesResultType) => {
                    return data.results;
                });
        }
    }

    getImagePath(posterPath: string): string {
        return environment.urlImageApi + posterPath;
    }
}

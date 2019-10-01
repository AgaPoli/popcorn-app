import { Component, OnInit, OnDestroy, OnChanges, Input } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { environment } from 'src/environments/environment';
import { PopularMoviesResultType } from 'src/app/models/popular.movies.result';
import { MovieListType } from 'src/app/models/movie.list.type';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})

export class MainContentComponent implements OnInit {
  movies: MovieListType[];
  activeCategory: string;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getMessage()
      .subscribe(
        category => {
          this.getMoviesByCategory(category).then(
            (movies) => { this.movies = movies }
          )
        }
      )
  }

  getMoviesByCategory(category: string = ''): Promise<MovieListType[]> {

    switch (category) {

      case 'topRated':
        return this.apiService.topRated()
          .then(
            (data: PopularMoviesResultType) => {
              return data.results;
            });

      case 'upcoming':
        return this.apiService.searchUpcoming()
          .then(
            (data: PopularMoviesResultType) => {
              return data.results;
            });

      case 'popular':
      default:
        return this.apiService.getPopular()
          .then(
            (data: PopularMoviesResultType) => {
              return data.results;
            });
    }
  }

  getImagePath(posterPath: string): string {
    return environment.urlImageApi + posterPath;
  }
}

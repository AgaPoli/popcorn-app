import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { environment } from 'src/environments/environment';
import { PopularMoviesResultType } from 'src/app/Types/popular.movies.result';
import { MovieListType } from 'src/app/Types/movie.list.type';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
 
popularMovies: MovieListType[];

constructor(private apiService: ApiService) { }

ngOnInit() {
  this.apiService.getPopular().subscribe((data: PopularMoviesResultType) => {
    this.popularMovies = data.results;
  });
}

getImagePath(posterPath: string): string{
  return environment.urlImageApi+posterPath;
}

}

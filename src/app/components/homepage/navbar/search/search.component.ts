import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Movie, PersonName } from 'src/app/models/movie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {

  movies: Movie[];
  name: PersonName

  constructor( 
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.searchPerson('Pit');
  }

  searchMovie(movieTitle: string): void {
    console.log(movieTitle);
    this.apiService.searchMovie(movieTitle)
    .then(
      movies => {
        console.log(movies);
        this.movies = movies.results; 
      }
    )
  }

  searchPerson(personName: string): void {
    console.log(personName);
    this.apiService.searchPerson(personName)
    .then(
      persons => {
        console.log(persons);
        this.name =  persons.results[0].name;
      }
    )
  }

  getImagePath(posterPath: string): string{
    return this.apiService.getImagePath(posterPath);
  }

  redirectToMovie(id: number): void{
    this.router.navigate(['movie',id]);
  }

}



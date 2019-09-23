import { Component, OnInit, OnDestroy } from "@angular/core";
import { ApiService } from "src/app/api.service";
import { ActivatedRoute } from "@angular/router";
import { Movie, Rating } from "src/app/models/movie.model";


@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.scss"]
})
export class MovieComponent implements OnInit {
  // # definicja zmiennej
  // zmienną możesz zdeklarować także w constructor używająć zapisu]
  // constructor(private zmienna: typ){}

  // nazwa: typ
  alfa: number;
  // nazwa = wartość
  beta = false;

  movie: Movie;
  id: number;
  routing: any;
  rating: Rating;


  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.routing = this.activatedRoute.params.subscribe(
      // function (data){
      //   console.log(data);
      // }

      // (data) => {
      //   console.log(data);
      // }
      params => {
        this.id = +params["id"];
        this.getMovie(this.id);
      }
    );
  }

  getMovie(id: number) {
    this.apiService
      .getMovie(id)
      .then(data => {
        console.log(data);
        this.movie = data;
        this.getRating(this.movie);
      });
      // .finally(() => this.routing.unsubscribe());
  }

  getRating(movie: Movie): Rating {
    return (this.rating = {
      imdb_id: movie.imdb_id,
      vote_average: movie.vote_average,
      vote_count: movie.vote_count,
      revenue: movie.revenue,
      runtime: this.timeConvert(movie.runtime)
    });
  }

  private timeConvert(rawMinutes: number): string {
    const hours = Math.floor(rawMinutes / 60);
    const minutes = rawMinutes % 60;
    return `${hours}h ${minutes}min`;
  }

  getImagePath(patch: string) {
    return this.apiService.getImagePath(patch);
  }
}

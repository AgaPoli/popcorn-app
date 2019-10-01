import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss']
})
export class PosterComponent implements OnInit {

  posterUrl: string
  routing$: any;
  id: number;
  movie: any;
  constructor(
    private apiService: ApiService,
    private routing: ActivatedRoute
  ) { }

  ngOnInit() {

    this.routing$ = this.routing.params
      .subscribe(
        params => {
          this.id = +params['id'];
          this.getMovie(this.id)
        }
      );
  }

  getMovie(id: number) {
    this.apiService.getMovie(id)
      .then(
        data => {
          console.log(data);
          this.movie = data;
        }
      ).finally(
        () => this.routing$.unsubscribe()
      );
  }
  getImagePath(patch: string) {
    return this.apiService.getImagePath(patch);
  }
}

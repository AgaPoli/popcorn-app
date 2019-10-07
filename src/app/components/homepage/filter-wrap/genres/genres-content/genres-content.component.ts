import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
    selector: 'app-genres-content',
    templateUrl: './genres-content.component.html',
    styleUrls: ['../genres.component.scss']
})
export class GenresContentComponent implements OnInit {
    genres: string[] = [];

    constructor(private apiService: ApiService) {}

    ngOnInit() {
        this.apiService.getGenreForMovies().then(genres => {
            this.genres = genres.genres;
        });
    }

    getMoviesForGenre(genreId: number) {
        this.apiService.activeCategory.next({ category: null, genre: genreId });
    }
}

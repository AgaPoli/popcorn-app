import { Movie } from './../../../models/movie.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-details-infos',
    templateUrl: './details-infos.component.html',
    styleUrls: ['./details-infos.component.scss']
})
export class DetailsInfosComponent implements OnInit {
    @Input() src: string;
    @Input() movie: Movie;

    constructor() {}

    ngOnInit() {}
}

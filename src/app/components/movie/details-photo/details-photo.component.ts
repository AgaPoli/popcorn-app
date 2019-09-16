import { Component, OnInit, Input } from '@angular/core';
import { Rating } from 'src/app/models/movie.model';

@Component({
  selector: 'app-details-photo',
  templateUrl: './details-photo.component.html',
  styleUrls: ['./details-photo.component.scss']
})
export class DetailsPhotoComponent implements OnInit {

  @Input() src: string;
  @Input() rating: Rating;

  constructor() { }

  ngOnInit() {
    console.log(this.src);
  }

}

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

  getImbdLink(imdbId: string): string|boolean{
    const imbdLink = `https://www.imdb.com/title/${imdbId}`;
    // const OLD_imbdLink = 'https://www.imdb.com/title/'+imdbId;
    
    // "5": string !== 5: number   //  true
    // "5": string != 5: number   //  false
    // "5": string == 5: number   //  true
    // "5": string === 5: number  // false
    // "5": string === `5`: string  // true
    // "5": string === '5': string  // true

    if (imdbId !== ""){
      return imbdLink;
    }else{
      return false;
    }
    
    return imdbId !== "" ? imbdLink : false;
  }

}

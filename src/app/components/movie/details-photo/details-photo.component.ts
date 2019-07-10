import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details-photo',
  templateUrl: './details-photo.component.html',
  styleUrls: ['./details-photo.component.scss']
})
export class DetailsPhotoComponent implements OnInit {

  @Input() src: string;

  constructor() { }

  ngOnInit() {
    console.log(this.src);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {
  genres: string[] = [
  'Commedy',
  'Crime',
  'Horror',
  'Action',
  'Animation',
  'Adventure',
  'Documentary',
  'Drama',
  'Fantasy',
  'Musical',
  'Crime',
  'Historical',
  'Romance',
  'Science-Fiction',
  'Western'


]


  constructor() { }

  ngOnInit() {
  }

}







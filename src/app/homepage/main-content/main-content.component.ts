import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
movies = [
'movie1',
'movie2',
'movie3',
'movie4',
'movie5',
'movie6',
'movie7',
'movie8',
'movie9',
'movie10',
'movie11'
];
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { FilterService } from 'src/app/filter.service';

@Component({
  selector: 'app-filter-wrap',
  templateUrl: './filter-wrap.component.html',
  styleUrls: ['./filter-wrap.component.scss']
})
export class FilterWrapComponent implements OnInit {

  @Output() toogle: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private filterService: FilterService ) {}

  ngOnInit() { }
 
  toogleSidenav(){
    this.toogle.emit(true);
  }

  test(){
    this.filterService.sidenav.toogle();
  }

}

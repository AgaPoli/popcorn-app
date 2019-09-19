import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { FilterService } from 'src/app/filter.service';

@Component({
  selector: 'app-filter-wrap',
  templateUrl: './filter-wrap.component.html',
  styleUrls: ['./filter-wrap.component.scss']
})
export class FilterWrapComponent implements OnInit {

  constructor(private filterService: FilterService ) {}

  ngOnInit() {
    console.log(this.filterService)
  }

  test(){
    // this.filterService.sidenav.toogle();
  }

}

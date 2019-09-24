import { Component, OnInit, ViewChild } from '@angular/core';
import { FilterService } from 'src/app/filter.service';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  @ViewChild('snav', { static: false }) sideNav: MatSidenav;

  constructor(private filterService: FilterService) { }

  ngOnInit() {
    console.log(this.filterService);
    this.filterService.sidenav = this.sideNav;
  }

  test() {
    this.filterService.sidenav.toggle()
  }

}

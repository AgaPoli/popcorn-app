import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FilterService } from 'src/app/filter.service';
import { MatSidenav } from '@angular/material';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
    @ViewChild('snav', { static: false }) sideNav: MatSidenav;

    constructor(private filterService: FilterService) {}

    ngOnInit() {}

    toogleSidenav(event: any) {
        this.sideNav.toggle();
    }
}

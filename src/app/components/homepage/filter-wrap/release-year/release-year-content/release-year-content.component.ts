import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-release-year-content',
    templateUrl: './release-year-content.component.html',
    styleUrls: ['../release-year.component.scss']
})
export class ReleaseYearContentComponent implements OnInit {
    lastYear: number;

    constructor() {}

    ngOnInit() {
        const today = new Date();
        this.lastYear = today.getFullYear() - 1;
    }
}

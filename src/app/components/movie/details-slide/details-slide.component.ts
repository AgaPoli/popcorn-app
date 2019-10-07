import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
    selector: 'app-details-slide',
    templateUrl: './details-slide.component.html',
    styleUrls: ['./details-slide.component.scss']
})
export class DetailsSlideComponent implements OnInit {
    @Input() productionCompanies: string;

    constructor(private apiService: ApiService) {}

    ngOnInit() {}

    getImagePath(patch: string) {
        return this.apiService.getImagePath(patch);
    }
}

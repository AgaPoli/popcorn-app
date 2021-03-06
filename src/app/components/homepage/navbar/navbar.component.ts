import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ApiService } from 'src/app/api.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    constructor(private apiService: ApiService) {}

    ngOnInit() {}

    setCategory(category: string): void {
        this.apiService.activeCategory.next({ category: category, genre: null });
    }
}

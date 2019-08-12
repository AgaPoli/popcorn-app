import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
 
popularMovies: any;

constructor(private apiService: ApiService) { }

ngOnInit() {
  this.apiService.getPopular().subscribe((data: any) => {
    this.popularMovies = data.results;
  });
}

getImagePath(posterPath: string): string{
  return environment.urlImageApi+posterPath;
}

}

import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.scss']
})
export class ButtonGroupComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {}

  setCategory(category: string): void{
    this.apiService.activeCategory.next(category);
  }

}
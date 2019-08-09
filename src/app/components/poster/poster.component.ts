import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss']
})
export class PosterComponent implements OnInit {
 
 posterUrl: string
  routing$: any;
  id: number;
  movie: any;
 constructor(
  private apiService: ApiService,
  private routing: ActivatedRoute
  ) { }

  ngOnInit() {

    this.routing$ = this.routing.params
    .subscribe(
      params => {
        this.id = +params['id'];
        this.getMovie(this.id)
        }
    );
      }
    
    getMovie(id: number){
      this.apiService.getMovie(id)
      .then(
        data => {
          console.log(data);
          this.movie = data;
        }
      ).finally(
        ()=> this.routing$.unsubscribe()
      );
  }
  getImagePath(patch: string){
    return this.apiService.getImagePath(patch);
  }


// KOT HTML
// <img id="slider" src="slajdy/slajd4.png">

// TOT JS	
  // var numer = Math.floor(Math.random()*5)+1;
			
  //  timer1 = 0;
  //  timer2 = 0;
  
  // function ustawslajd(nrslajdu)
  // {
  //   clearTimeout(timer1);
  //   clearTimeout(timer2);
  //   numer = nrslajdu - 1;
    
  //   schowaj();
  //   setTimeout("zmienslajd()", 500);
    
  // }
  
  // function schowaj()
  // {
    //    ukrywanie elementu "#slider"
  // }

  // function zmienslajd()
  // {
  //   numer++; if (numer>5) numer=1;
    
  //   var plik = "<img src=\"slajdy/slajd" + numer + ".png\" />";
    
  //   document.getElementById("slider").innerHTML = plik;
  //    ukrywanie elementu "#slider"
    
  //   timer1 = setTimeout("zmienslajd()", 5000);
  //   timer2 = setTimeout("schowaj()", 4500);
  
  // }

}

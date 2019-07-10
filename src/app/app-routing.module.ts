import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './homepage/navbar/navbar.component';
import { MovieComponent } from './components/movie/movie.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'movie/:id', component: MovieComponent },
  // { path: 'search', component: NavbarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

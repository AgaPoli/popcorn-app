import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavbarComponent } from './components/homepage/navbar/navbar.component';
import { MovieComponent } from './components/movie/movie.component';
import { PosterComponent } from './components/poster/poster.component';

const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'movie/:id', component: MovieComponent },
    { path: 'movie/:id/poster', component: PosterComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

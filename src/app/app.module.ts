import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './homepage/navbar/navbar.component';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import { FilterWrapComponent } from './homepage/filter-wrap/filter-wrap.component';
import { MainContentComponent } from './homepage/main-content/main-content.component';
import { DetailsSlideComponent } from './components/movie/details-slide/details-slide.component';
import { DetailsPhotoComponent } from './components/movie/details-photo/details-photo.component';
import { DetailsInfosComponent } from './components/movie/details-infos/details-infos.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './homepage/navbar/search/search.component';
import { ReleaseYearComponent } from './homepage/filter-wrap/release-year/release-year.component';
import { GenresComponent } from './homepage/filter-wrap/genres/genres.component';
import { RatingComponent } from './homepage/filter-wrap/rating/rating.component';

import { HomepageComponent } from './homepage/homepage.component';
import { ButtonGroupComponent } from './homepage/filter-wrap/button-group/button-group.component';
import { MovieComponent } from './components/movie/movie.component';

@NgModule({
  exports:[ MatAutocompleteModule,
    MatBadgeModule, 
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    MatToolbarModule],
  declarations: [
    AppComponent,
    NavbarComponent,
    FilterWrapComponent,
    MainContentComponent,
    DetailsSlideComponent,
    DetailsInfosComponent,
    DetailsPhotoComponent,
    FooterComponent,
    SearchComponent,
    ReleaseYearComponent,
    GenresComponent,
    RatingComponent,
    HomepageComponent,
    ButtonGroupComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
                                                                                                                                                                                                                                  
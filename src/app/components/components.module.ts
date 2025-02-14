import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { LoginAndRegisterFormComponent } from './login-and-register-form/login-and-register-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './home-page/components/navbar/navbar.component';
import { MoviesComponent } from './home-page/components/movies/movies.component';
import { TvSeriesComponent } from './home-page/components/tv-series/tv-series.component';
import { BookmarkComponent } from './home-page/components/bookmark/bookmark.component';
import { BrowseComponent } from './home-page/components/browse/browse.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { TrendingCardComponent } from './trending-card/trending-card.component';
import { MediaCardComponent } from './media-card/media-card.component';
import { SectionsTitleComponent } from './sections-title/sections-title.component';
import { EmailValidatorDirective } from '../validators/email-validator.directive';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogTitle } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';



@NgModule({
  declarations: [
    LoginAndRegisterFormComponent,
    HomePageComponent,
    NavbarComponent,
    MoviesComponent,
    TvSeriesComponent,
    BookmarkComponent,
    BrowseComponent,
    SearchBarComponent,
    TrendingCardComponent,
    MediaCardComponent,
    SectionsTitleComponent,
    EmailValidatorDirective,
    DialogComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatDialogContent,
    MatDialogTitle,
    MatDialogClose, 
    MatDialogActions,
    MatButtonModule,
    MatTooltipModule
  ],
  exports: [
    LoginAndRegisterFormComponent,
    HomePageComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule { }

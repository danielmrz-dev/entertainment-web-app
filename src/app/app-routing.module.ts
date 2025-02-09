import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAndRegisterFormComponent } from './components/login-and-register-form/login-and-register-form.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MoviesComponent } from './components/home-page/components/movies/movies.component';
import { TvSeriesComponent } from './components/home-page/components/tv-series/tv-series.component';
import { BookmarkComponent } from './components/home-page/components/bookmark/bookmark.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { 
    path: 'login', 
    component: LoginAndRegisterFormComponent, 
    data: { isLoginPage: true }
  },
  { 
    path: 'register', 
    component: LoginAndRegisterFormComponent,
    data: { isLoginPage: false }
  },
  { 
    path: 'browse', 
    component: HomePageComponent,
    children: [
      { path: 'movies', component: MoviesComponent },
      { path: 'tv-series', component: TvSeriesComponent },
      { path: 'bookmark', component: BookmarkComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

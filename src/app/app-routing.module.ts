import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAndRegisterFormComponent } from './components/login-and-register-form/login-and-register-form.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MoviesComponent } from './components/home-page/components/movies/movies.component';
import { TvSeriesComponent } from './components/home-page/components/tv-series/tv-series.component';
import { BookmarkComponent } from './components/home-page/components/bookmark/bookmark.component';
import { BrowseComponent } from './components/home-page/components/browse/browse.component';
import { innerRoutesGuard } from './guards/inner-routes.guard';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'browse', pathMatch: 'full' },
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
    // canActivate: [innerRoutesGuard],
    // canActivateChild: [authGuard],
    children: [
      { path: '', component: BrowseComponent },
      { path: 'movies', component: MoviesComponent },
      { path: 'tv-series', component: TvSeriesComponent },
      { path: 'bookmark', component: BookmarkComponent },
    ],
  },
  { path: "**", redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAndRegisterFormComponent } from './components/login-and-register-form/login-and-register-form.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

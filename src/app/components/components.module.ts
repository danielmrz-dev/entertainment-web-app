import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { LoginAndRegisterFormComponent } from './login-and-register-form/login-and-register-form.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    LoginAndRegisterFormComponent,
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [
    LoginAndRegisterFormComponent
  ]
})
export class ComponentsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { LoginAndRegisterFormComponent } from './login-and-register-form/login-and-register-form.component';

@NgModule({
  declarations: [
    LoginAndRegisterFormComponent
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

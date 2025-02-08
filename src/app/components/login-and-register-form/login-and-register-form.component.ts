import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-and-register-form',
  templateUrl: './login-and-register-form.component.html',
  styleUrl: './login-and-register-form.component.scss'
})
export class LoginAndRegisterFormComponent {
  isLoginPage: boolean = true;

  private readonly _activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this._activatedRoute.data.subscribe((value) => {
      this.isLoginPage = value['isLoginPage'];
    })
  }

  teste1() {
    console.log("Logou");
    
  }
  teste2() {
    console.log("Criou conta");
    
  }
}

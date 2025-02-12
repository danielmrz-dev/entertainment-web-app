import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-and-register-form',
  templateUrl: './login-and-register-form.component.html',
  styleUrl: './login-and-register-form.component.scss'
})
export class LoginAndRegisterFormComponent {
  
  isLoginPage: boolean = true;
  loginForm!: FormGroup;

  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _fb = inject(FormBuilder);

  ngOnInit(): void {
    this._activatedRoute.data.subscribe((value) => {
      this.isLoginPage = value['isLoginPage'];
    })
    this.loginForm = this._fb.group({
      email: this._fb.control('', [Validators.required]),
      password: this._fb.control('', [Validators.required]),
      repeatPassword: this._fb.control('', [Validators.required]),
    }, { updateOn: 'blur' })
  }

  get email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }
  
  get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  get repeatPassword(): FormControl {
    return this.loginForm.get('repeatPassword') as FormControl;
  }

  login() {
    console.log("Logou");
    
  }
  createAccount() {
    console.log("Criou conta");
    
  }
}

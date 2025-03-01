import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { HttpErrorResponse } from '@angular/common/http';
import { LoadingService } from '../../services/loading.service';
import { NgxSpinnerService } from "ngx-spinner";
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-login-and-register-form',
  templateUrl: './login-and-register-form.component.html',
  styleUrl: './login-and-register-form.component.scss'
})
export class LoginAndRegisterFormComponent {

  isLoginPage: boolean = true;
  loginForm!: FormGroup;
  tooltipMessage: string = `Please use ⬇️\n\nEmail: user@user.com \n Password: user123\n\nOr create an account.\n\nYour data is automatically\ndeleted after a few hours.`;

  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _fb = inject(FormBuilder);
  private readonly _loginService = inject(LoginService);
  private readonly _router = inject(Router);
  readonly _loadingService = inject(LoadingService);
  private spinner = inject(NgxSpinnerService);
  private readonly dialog = inject(MatDialog)

  ngOnInit(): void {
    this.spinner.show();
    this._activatedRoute.data.subscribe((value) => {
      this.isLoginPage = value['isLoginPage'];
    })
    this.loginForm = this._fb.group({
      email: this._fb.control('', { validators: [Validators.required], updateOn: 'blur' }),
      password: this._fb.control('', [Validators.required]),
      repeatPassword: this._fb.control('', [Validators.required]),
    })
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
    this._loginService.login(this.email.value, this.password.value).subscribe({
      next: () => {
        this._loginService.isLoggedSubject.next(true);
        this._router.navigate(['/browse']);
      },
      error: (error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.loginForm.setErrors({ invalidCredentials: true });
          return;
        }
        this.loginForm.setErrors({ generalError: true });
      }
    })
  }
  
  createAccount() {
    this._loginService.createAccount(this.email.value, this.password.value).subscribe({
      next: () => {
        this.dialog.open(DialogComponent);
        this._router.navigate(['/login']);
      },
      error: () => {
        this.loginForm.setErrors({ userAlreadyExists: true });
      }
    })

  }
}

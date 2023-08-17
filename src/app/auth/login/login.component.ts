import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../auth-service/auth.service';
import { HotToastService } from '@ngneat/hot-toast';
import { Login } from '../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm:FormGroup

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastService: HotToastService
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  // login function
  loginUser() {
    const loginData: Login = {
      ...this.loginForm.value
    }
    this.authService.add(loginData).subscribe({
      next: () => { 
        this.toastService.success('Welcome!')
      },
      error:(err:any) => {
        this.toastService.error(`Something went wrong!: ${err.error.message}`) 
      }
    });
  }

}

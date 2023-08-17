import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth-service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]]
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
  }

  // login function
  loginUser() {
    const loginData = {
      ...this.loginForm.value
    }
    this.authService.add(loginData).subscribe({
      next: (res:any) => { 
      },
      error:(err:any) => { console.log('Login Data Err', err);
      }
    });
  }

}

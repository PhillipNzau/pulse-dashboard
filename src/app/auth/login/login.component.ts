import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../auth-service/auth.service';
import { HotToastService } from '@ngneat/hot-toast';
import { Login } from '../models/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  isLoggedIn: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastService: HotToastService,
    private route: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  ngOnInit(): void {
    // Check if user is logged in, if user is logged in redirect to home page
    !!localStorage.getItem('pdTkn') ? this.route.navigate(['/']).then(() => {}) : null 
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

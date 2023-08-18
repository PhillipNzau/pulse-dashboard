import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../auth-service/auth.service';
import { HotToastService } from '@ngneat/hot-toast';
import { Login } from '../models/login';
import { Router } from '@angular/router';
import { SettingsService } from 'src/app/dashboard/settings/services/settings.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  resetPwdForm:FormGroup;
  isLoggedIn: boolean = false;
  forgotPwd:boolean = false;
  passwordResetStatus:boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private settingService:SettingsService,
    private toastService: HotToastService,
    private route: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
    this.resetPwdForm = this.fb.group({
      email:['',[Validators.required, Validators.email]]
    })
  }

  ngOnInit(): void {
    // Check if user is logged in, if user is logged in redirect to home page
    !!localStorage.getItem('pdTkn') ? this.route.navigate(['/']).then(() => {}) : null 
  }

  toggleForgot() {
    this.forgotPwd = !this.forgotPwd    
  }

  // login function
  loginUser() {
    const loadingToast = this.toastService.loading('Processing...');

    const loginData: Login = {
      ...this.loginForm.value
    }
    this.authService.add(loginData).subscribe({
      next: () => { 
        loadingToast.close();

        this.toastService.success('Welcome!');
      },
      error:(err:any) => {
        loadingToast.close();
        this.toastService.error(`Something went wrong!: ${err.error.message}`) 
      }
    });
  }

  // Reset password
  resetPwd() {
    const loadingToast = this.toastService.loading('Processing...');
    const data = {
      ...this.resetPwdForm.value
    }
    this.settingService.resetPwd(data).subscribe({
      next:()=> {
        loadingToast.close();
        this.toastService.success('We have sent you an email');
        this.passwordResetStatus = !this.passwordResetStatus

      },
      error: (err)=> {
        loadingToast.close();

        console.log('err', err);
        this.toastService.error(`Something went wrong: ${err}`) 
      }
    })

  }

}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { SettingsService } from '../../services/settings.service';
import { UpdatePwdModel } from 'src/app/dashboard/shared/models/userModel';

@Component({
  selector: 'app-password-security',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './password-security.component.html',
  styleUrls: ['./password-security.component.scss']
})
export class PasswordSecurityComponent {
  showPassword: boolean = false;
  changePwdForm = this.fb.group({
    currentPassword: ['', [Validators.required, Validators.minLength(6)]],
    newPassword: ['', [Validators.required, Validators.minLength(6)]],
    cnPassword: ['', [Validators.required, Validators.minLength(6)]],
  }, {
    validators: this.passwordMatchValidator
  })
  constructor(
    private fb: FormBuilder,
    private toastService: HotToastService,
    private settingsService: SettingsService
  ) {}


  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('newPassword')?.value;
    const confirmPassword = formGroup.get('cnPassword')?.value;

    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  toggleShowPwd() {
    this.showPassword = !this.showPassword;
  }


  changePwd() {
    const loadingToast = this.toastService.loading('Processing...');
    const updateData: UpdatePwdModel = {
      currentPassword: this.changePwdForm.get('currentPassword')?.value,
      newPassword: this.changePwdForm.get('newPassword')?.value
    }

    // console.log(updateData);
    this.settingsService.changePwd(updateData).subscribe({
      next:()=> {
        this.changePwdForm.reset();
        loadingToast.close();
        this.toastService.success('Update Success');

      },
      error:(err)=> {
        loadingToast.close();
        this.toastService.error(`Something went wrong!: ${err.error.message}`) 
        
      }
    })
    
  }

}

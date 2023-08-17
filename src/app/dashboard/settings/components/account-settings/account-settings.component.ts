import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEntityService } from 'src/app/dashboard/shared/ngrx-store/user/user-entity.service';
import { UserModel } from 'src/app/dashboard/shared/models/userModel';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-account-settings',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {
  userDetailForm: FormGroup;
  user: any;

  constructor(
    private userService: UserEntityService,
    private fb: FormBuilder,
    private toastService: HotToastService,
  ) {
    this.userDetailForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  ngOnInit(): void {
    this.getLoggedInUser();
  }

  getLoggedInUser() {
    return this.userService.entities$.subscribe({
      next:(res)=> {
        console.log('res', res);
        this.user = res[0]

        console.log('resssd', this.user);
        const initialData = {
          firstName: this.user?.firstName + '',
          lastName:this.user?.lastName + '',
          email: this.user?.name
        }
        this.userDetailForm.patchValue(initialData)
      },
      error:(err)=> {
        console.log('err', err);
      }
    })
  }

  //Update user
  updateUser() {
    // const updateData = {
    //   fullName: this.userDetailForm.get('firstName')?.value + ' ' 
    // }
    const updateData = {
      ...this.userDetailForm
    }
    console.log('up user', updateData);
    
  }

}

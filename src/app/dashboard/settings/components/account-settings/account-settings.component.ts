import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEntityService } from 'src/app/dashboard/shared/ngrx-store/user/user-entity.service';
import { UserModel } from 'src/app/dashboard/shared/models/userModel';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-account-settings',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {
  userDetailForm: FormGroup;
  user: UserModel | undefined;

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
      next:(res:UserModel[])=> {
        this.user = res[0]

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
    const loadingToast = this.toastService.loading('Processing...');
    const updateData = {
      ...this.userDetailForm.value
    }
    const update = {
      ...this.user,
      firstName: updateData.firstName,
      lastName: updateData.lastName,
      email: updateData.email
    }
    
    
    // console.log('up user', update);
    this.userService.add(update).subscribe({
      next:()=> {
        loadingToast.close();
        this.toastService.success('Update Success');
      },
      error:(err)=>{
        loadingToast.close();
        this.toastService.error(`Something went wrong!: ${err.error.message}`) 
      }
    })
    
  }

}

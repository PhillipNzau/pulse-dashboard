import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserEntityService } from '../shared/ngrx-store/user/user-entity.service';
import { UserModel } from '../shared/models/userModel';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule,  RouterModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  userType: string = '';
  
  constructor(private userService: UserEntityService){}


  ngOnInit(): void {
    this.getUserType()
  }

  // Get the type of user logged in
  getUserType() {
    this.userService.entities$.subscribe({
      next:(data:UserModel[])=>{
        this.userType = data[0]?.customerId.entityType        
      },
      error:(err)=>{
        console.log('Error getting users entities', err);
        
      }
    })
  }

}

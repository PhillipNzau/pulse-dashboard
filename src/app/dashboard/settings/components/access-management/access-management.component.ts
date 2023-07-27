import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-access-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './access-management.component.html',
  styleUrls: ['./access-management.component.scss']
})
export class AccessManagementComponent {
  isEditUser:boolean = false;
  isAddUser:boolean = false;
}

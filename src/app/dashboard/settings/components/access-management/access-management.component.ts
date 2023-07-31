import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from "../../../shared/components/modal/modal.component";

@Component({
    selector: 'app-access-management',
    standalone: true,
    templateUrl: './access-management.component.html',
    styleUrls: ['./access-management.component.scss'],
    imports: [CommonModule, ModalComponent]
})
export class AccessManagementComponent {
  isEditUser:boolean = false;
  isAddUser:boolean = false;
  showModal:boolean = false;

  closeModal(): void {
    console.log('sdsd');
    
    this.showModal = false;
  }
}

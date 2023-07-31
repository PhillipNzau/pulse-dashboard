import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from "../shared/components/modal/modal.component";

@Component({
    selector: 'app-meters',
    standalone: true,
    templateUrl: './meters.component.html',
    styleUrls: ['./meters.component.scss'],
    imports: [CommonModule, ModalComponent]
})
export class MetersComponent {
  filterText:string =  'all'
  showDeleteModal:boolean = false;
  showEditModal:boolean =false;
  showAddModal:boolean =false;

  closeModal(): void {
    
    this.showAddModal = false;
    this.showEditModal = false;
    this.showDeleteModal = false;
  }

  filterTable(filter:string) {
    this.filterText = filter
  }

}

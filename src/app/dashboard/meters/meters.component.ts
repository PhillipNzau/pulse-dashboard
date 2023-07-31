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

  closeModal(): void {
    console.log('sdsd');
    
    this.showDeleteModal = false;
  }

  filterTable(filter:string) {
    this.filterText = filter
  }

}

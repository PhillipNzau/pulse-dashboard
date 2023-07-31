import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
@Component({
  selector: 'delete-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition(':enter, :leave', [animate('0.3s ease-in-out')]),
    ]),
    
  ],
})
export class DeleteModalComponent {
  @Input() showModal = false;
  @Input() width:string = 'auto';
  @Input() borderColor:string = 'auto';

  @Output() backdropClick = new EventEmitter<void>();

  onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      console.log('back drop');
      
      this.backdropClick.emit();
    }
  }

}

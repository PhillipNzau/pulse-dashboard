import { Component, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { DropdownOption } from '../../models/dropdownModel';

@Component({
  selector: 'app-export-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './export-dropdown.component.html',
  styleUrls: ['./export-dropdown.component.scss'],
  animations: [
    trigger('toggleDropdown', [
      state('closed', style({ height: '0', opacity: '0', visibility: 'hidden' })),
      state('open', style({ height: '*', opacity: '1', visibility: 'visible' })),
      transition('closed <=> open', [animate('200ms ease-in-out')]),
    ]),
    trigger('dropdownAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(-10px)', opacity: 0 }),
        animate('150ms ease-out', style({ transform: 'translateY(0)', opacity: 1 })),
      ]),
      transition(':leave', [
        style({ transform: 'translateY(0)', opacity: 1 }),
        animate('150ms ease-in', style({ transform: 'translateY(-10px)', opacity: 0 })),
      ]),
    ]),
  ],
})
export class ExportDropdownComponent {
  @Input() options: DropdownOption[] = [];
  @HostBinding('class.open') isOpen = false;
  @Output() optionSelected = new EventEmitter<any>();

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event.target'])
  onClick(target: any) {
    const clickedInside = this.elementRef.nativeElement.contains(target);
    if (!clickedInside) {
      this.isOpen = false;
    }
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectOption(optionValue: any) {
    this.optionSelected.emit(optionValue);
    this.isOpen = false;
  }

}


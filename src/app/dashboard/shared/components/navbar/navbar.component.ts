import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports:[CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  implements OnInit{
  @Output() triggerMenu: EventEmitter<boolean> = new EventEmitter<boolean>();
  isSmallScreen: boolean = false;


  constructor(private router: Router) {
    this.checkScreenSize()
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isSmallScreen = window.innerWidth <= 768; // Adjust breakpoint as needed
  }

  ngOnInit(): void {
  }

  isRouteActive(routePath: string): boolean {
   return this.router.url == routePath
  }

  trigger() {
    if (this.isSmallScreen) {
      this.triggerMenu.emit(false)
    }
  }

}

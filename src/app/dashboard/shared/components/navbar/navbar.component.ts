import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/auth/auth-service/auth.service';

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


  constructor(
    private authService: AuthService,
    private router: Router) {
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

  logOutUser() {
    this.authService.logoutUser('logout')
    this.router.navigate(['/auth']).then(() => {})
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

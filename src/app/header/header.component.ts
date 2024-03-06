import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuComponent } from "../menu/menu.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [MenuComponent, CommonModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})

export class HeaderComponent {
  constructor(private router: Router) { }
  
  isMenuOpen: boolean = false;

  toggleMenu() {
    console.log(this.isMenuOpen);
    this.isMenuOpen = !this.isMenuOpen;
  }

  redirectToSignup() {
    this.router.navigate(['signup']);
  }

  redirectToHome() {
    this.router.navigate(['']);
  }

  redirectToCatalog() {
    this.router.navigate(['catalog']);
  }

}

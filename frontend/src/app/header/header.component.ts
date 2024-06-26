import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuComponent } from "../menu/menu.component";
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../search/search.component';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [MenuComponent, CommonModule, SearchComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})

export class HeaderComponent {
  constructor(private router: Router) { }
  
  isMenuOpen: boolean = false;

  toggleMenu() {
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

  redirectToCart() {
    this.router.navigate(['shopping-cart']);
  }
}

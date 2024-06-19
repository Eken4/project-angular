import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  constructor(private router: Router) { }

  redirectToHome() {
    this.router.navigate(['home']);
  }

  redirectToAbout() {
    this.router.navigate(['about']);
  }

  redirectToCatalog() {
    this.router.navigate(['catalog']);
  }

}

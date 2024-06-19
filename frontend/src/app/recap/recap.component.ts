import { Component, OnInit } from '@angular/core';
import { RegistrationDataService } from '../services/registrationData.service';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.css']
})

export class RecapComponent implements OnInit {
  person: User | null = null;

  constructor(private dataService: RegistrationDataService, private router: Router) { }

  ngOnInit() {
    // Souscrire au service pour recevoir les mises à jour des données
    this.dataService.formData$.subscribe((data: User) => {
      this.person = data;
    });
  }

  confirmRegistration() {
    // Logique pour confirmer l'enregistrement
  }

  goBackToSignup() {
    this.router.navigate(['signup']);
  }
}

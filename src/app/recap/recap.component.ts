import { Component, OnInit } from '@angular/core';
import { User } from '../signup/signup.component';
import { DataService } from '../services/registrationData.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.css']
})

export class RecapComponent implements OnInit {
  person: User | null = null;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    // Souscrire au service pour recevoir les mises à jour des données
    this.dataService.formData$.subscribe((data: User) => {
      this.person = data;
    });
  }

  confirmRegistration() {
    // Logique pour confirmer l'enregistrement
    console.log('ConfirmRegistration button clicked');
  }

  goBackToSignup() {
    this.router.navigate(['signup']);
    console.log('BackToSignup button clicked');
  }
}

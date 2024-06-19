import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class RegistrationDataService {
  private formData = new BehaviorSubject<User>(new User()); // Créer un objet BehaviorSubject pour partager les données entre les composants
  formData$ = this.formData.asObservable();                     // Créer un observable pour permettre aux autres composants de s'abonner à ce BehaviorSubject 

  updateFormData(data: User) {                                // Fonction pour mettre à jour les données du BehaviorSubject
    this.formData.next(data);                                     // Mettre à jour les données du BehaviorSubject avec les données passées en paramètre
  }
}

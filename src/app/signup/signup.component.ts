import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../services/registrationData.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})

export class SignupComponent {
  user: User = new User();
  formError: boolean = false;
  errorMessage: string = '';

  constructor(private dataService: DataService, private router: Router) { }

  onSignUp(): void {
    if (this.isFormValid() == true) {
      this.ToRegistrationRecap();
    } else {
      this.getErrorMessage();
    }
  }

  isFormValid(): boolean {
    this.getErrorMessage();
    if (this.errorMessage == '')
      return true;
    else
      return false;
  }

  // Function to go to the registration recap page and send the data to the service
  ToRegistrationRecap() {
    this.dataService.updateFormData(this.user);
    this.router.navigate(['recap']);
  }

  // Function to display an error message if the form is not valid
  getErrorMessage() {
    this.errorMessage = '';
    if (this.user.firstName === '') {
      this.formError = true;
      this.errorMessage = 'First name is required';
    }
    else if (this.user.lastName === '') {
      this.formError = true;
      this.errorMessage = 'Last name is required';
    }
    else if (this.user.phone === '') {
      this.formError = true;
      this.errorMessage = 'Phone number is required';
    }
    else if (this.user.email === '') {
      this.formError = true;
      this.errorMessage = 'Email is required';
    }
    else if (this.user.zipcode === '') {
      this.formError = true;
      this.errorMessage = 'Postal code is required';
    }
    else if (this.user.city === '') {
      this.formError = true;
      this.errorMessage = 'City is required';
    }
    else if (this.user.gender === '') {
      this.formError = true;
      this.errorMessage = 'Gender is required';
    }
    else if (this.user.login === '') {
      this.formError = true;
      this.errorMessage = 'Login is required';
    }
    else if (this.user.password === '') {
      this.formError = true;
      this.errorMessage = 'Password is required';
    }
  }
}

export class User {
  gender: string = '';
  lastName: string = '';
  firstName: string = '';
  phone: string = '';
  email: string = '';
  address: string = '';
  zipcode: string = '';
  city: string = '';
  login: string = '';
  password: string = '';
}
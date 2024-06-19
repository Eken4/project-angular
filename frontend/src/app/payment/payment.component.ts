import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  paymentForm: FormGroup;
  formError: boolean = false;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.paymentForm = this.fb.group({
      name: ['', Validators.required],
      code: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      ccv: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]],
      expirydate: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/)]],
    });
   }

   isFormValid(): boolean {
    this.getErrorMessage();
    if (this.errorMessage == '')
      return true;
    else
      return false;
  }

  getErrorMessage() {
    
  }

  pay() {
    if (this.isFormValid() == true) {
      this.ToPaymentRecap();
    } else {
      this.getErrorMessage();
    }
  }

  

  ToPaymentRecap() {
    setTimeout(() => {
      this.router.navigate(['payment-complete'])
    }, 1500);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Card } from '../../models/card';
import { ApiService } from '../../services/api.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-card-form',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  providers: [ApiService],
  templateUrl: './card-form.component.html',
  styleUrl: './card-form.component.css'
})
export class CardFormComponent implements OnInit{
  cardForm: FormGroup;

  ngOnInit(): void {
    
  }

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.cardForm = this.fb.group({
      name: ['', Validators.required],
      code: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      ccv: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]],
      expirydate: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/)]],
    });
   }

   addCard() {
    if (this.cardForm.valid) {
      const card: Card = this.cardForm.value;
      this.apiService.createCard(card);
    }

  }

}

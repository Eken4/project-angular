import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentDataService } from '../services/paymentData.service';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product';


@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent implements OnInit{

  declare totalAmount: string;
  public declare products: Product[]; 

  constructor(private paymentDataService: PaymentDataService, private router: Router) { }

  ngOnInit() {
    this.totalAmount="0";
  }

  ToPaymentForm() {
    this.paymentDataService.updateFormData(this.totalAmount);
    this.router.navigate(['payment']);
  }

}

import { Component } from '@angular/core';
import { Product } from '../models/product';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  providers: [ShoppingCartComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  inputs: ['data']
})
export class ProductComponent {
  public declare data: Product

  constructor(private cart: ShoppingCartComponent) { }

  addToCart() {

  }
}

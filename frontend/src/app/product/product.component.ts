import { Component } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  inputs: ['data']
})
export class ProductComponent {
public declare data: Product
}

import { Component, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Component({
  providers: [ApiService],
  selector: 'app-catalog',
  standalone: true,
  imports: [AsyncPipe, CommonModule, HttpClientModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent implements OnInit {
  products!: Observable<Product[]>;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.products = this.apiService.getProducts();

  }

}

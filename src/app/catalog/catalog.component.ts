import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { Product } from '../models/product';
import { SearchComponent } from '../search/search.component';
import { ProductComponent } from '../product/product.component';

@Component({
  providers: [ApiService],
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, HttpClientModule, SearchComponent, ProductComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent implements OnInit {
  products!: Product[]; // Utilisez Product[] plutôt qu'Observable<Product[]>

  public search: string = '';

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getProducts();
  }

  onSearch(newSearch: string) {
    this.search = newSearch;
    this.getProducts();
  }

  getProducts(filter?: string) {
    this.apiService.getProducts().subscribe((result) => {
      this.products = result.filter((product) => {
        if (filter) {
          return (
            product.name.toLowerCase().includes(filter.toLowerCase()) ||
            product.destination.toLowerCase().includes(filter.toLowerCase()) ||
            product.description.toLowerCase().includes(filter.toLowerCase())
          );
        }
        return true;
      });
    });
  }
}

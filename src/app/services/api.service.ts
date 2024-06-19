import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Card } from '../models/card';
import { Product } from '../models/product';
import { environment } from '../../environments/environment';


@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.backendClient + "products.json");
  }


  createCard(card: Card) {
    return this.http.post<Card>(environment.backendClient + "cards.json", card);
  }

  public getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(environment.backendClient + "cards.json");
  }

  deleteCard(){
    
  }
}

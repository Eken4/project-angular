import { Component } from '@angular/core';
import { Card } from '../../models/card';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  providers: [ApiService],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  inputs: ['data']
})

export class CardComponent {
  public declare data: Card

  constructor(private apiService: ApiService){
    
  }
  
  deleteCard(){
    return this.apiService.deleteCard();
  }
}

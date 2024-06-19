import { Injectable, OnInit } from '@angular/core';
import { Card } from '../models/card';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})

export class CardCrudService implements OnInit {
  public declare cards: Card[];

  ngOnInit(): void {
    this.apiService.getCards().subscribe((result: Card[]) => {
      this.cards = result;
    });
  }

  constructor(private apiService: ApiService) { }


  createCards(card:Card) {
    this.cards.push(card);
  }

  readCards() {
    return this.cards;
  }

  updateCards() {

  }

  deleteCards(card:Card) {
    const index = this.cards.findIndex(c => c.code === card.code);
    this.cards.splice(index, 1);

  }
}

import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card';
import { CardComponent } from '../card/card.component';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  providers: [ApiService],
  selector: 'app-card-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, CardComponent],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent implements OnInit{
  public declare cards: Card[];

  ngOnInit() {
    this.getCards();
  }

  constructor(private apiService: ApiService) { }

  getCards() {
    this.apiService.getCards().subscribe((result: Card[]) => {
      this.cards = result;
    });
  }

}

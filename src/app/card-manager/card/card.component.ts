import { Component } from '@angular/core';
import { Card } from '../../models/card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  inputs: ['data']
})

export class CardComponent {
  public declare data: Card
  
}

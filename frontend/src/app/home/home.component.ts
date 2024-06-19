import { Component } from '@angular/core';
import { CardListComponent } from '../card-manager/card-list/card-list.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CardListComponent]
})
export class HomeComponent {

}

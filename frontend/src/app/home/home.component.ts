import { Component } from '@angular/core';
import { PaymentComponent } from '../payment/payment.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [PaymentComponent]
})

export class HomeComponent {

}

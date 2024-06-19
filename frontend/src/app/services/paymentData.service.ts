import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class PaymentDataService {
    private amountToPay = new BehaviorSubject<string>("");
    amountToPay$ = this.amountToPay.asObservable();

    updateFormData(amountData: string) {
        this.amountToPay.next(amountData);
    }
}

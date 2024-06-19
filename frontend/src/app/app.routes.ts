import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
// import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { RecapComponent } from './recap/recap.component';
import { CatalogComponent } from './catalog/catalog.component';
import { AboutComponent } from './about/about.component';
import { CardListComponent } from './card-manager/card-list/card-list.component';
import { CardFormComponent } from './card-manager/card-form/card-form.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentCompleteComponent } from './payment-complete/payment-complete.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'catalog', component: CatalogComponent },
    { path: 'shopping-cart', component: ShoppingCartComponent },
    {path: 'payment', component: PaymentComponent},
    {path: 'payment-complete', component: PaymentCompleteComponent},
    { path: 'card-form', component: CardFormComponent },
    { path: 'cards', component: CardListComponent },
    // { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'recap', component: RecapComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

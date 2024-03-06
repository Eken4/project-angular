import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
// import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { RecapComponent } from './recap/recap.component';
import { CatalogComponent } from './catalog/catalog.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'catalog', component: CatalogComponent },
    // { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'recap', component: RecapComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

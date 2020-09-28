import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { ViewcartComponent } from './viewcart/viewcart.component';

const routes: Routes = [
  {
    path: "product",
    component: HomeComponent
  },
  {
     path: "login",
     component: LoginComponent
   },
   {
     path: "registration",
     component: RegistrationComponent
   },
  {
    path: "cart",
    component: ViewcartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

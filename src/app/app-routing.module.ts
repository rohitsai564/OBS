import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { pathToFileURL } from 'url';
import { AddbookComponent } from './addbook/addbook.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './auth/login/login.component';
import { LogincustomerComponent } from './auth/logincustomer/logincustomer.component';
import { SignupComponent } from './auth/signup/signup.component';
import { BookshomeComponent } from './bookshome/bookshome.component';
import { CartComponent } from './cart/cart.component';
import { FictioncategoryComponent } from './fictioncategory/fictioncategory.component';
import { HomeComponent } from './home/home.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ShowdetailsComponent } from './showdetails/showdetails.component';
import { WalletComponent } from './wallet/wallet.component';

const routes: Routes = [
 
  {
    path:'admin', component:LoginComponent
  },
  {
    path:'', component:HomeComponent
  },
  {
    path:'bookshome', component:BookshomeComponent
  },
  {
      path:'signup', component:SignupComponent
    },
  {
    path:'login', component:LogincustomerComponent
  },
  {
    path:'cart', component:CartComponent
  },
  {
      path:'wallet',component:WalletComponent 
  },
  {
    path:'bookshome', component:BookshomeComponent
  },
  {
    path:'bookshome/Cart', component:CartComponent
  },
  {
    path:'bookshome', component:BookshomeComponent
  },
  {
    path:'bookshome/showdetails', component:ShowdetailsComponent
  },
  {
    path:'bookshome/fiction', component:FictioncategoryComponent
  },
  
  {  path:'admindashboard',component:AdminComponent,children:[
    {
      path:'addbook',component:AddbookComponent
    }
  ]
  },
  {
    path:'bookshome/showdetails/reviews', component:ReviewsComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

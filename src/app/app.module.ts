import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { BookshomeComponent } from './bookshome/bookshome.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LogincustomerComponent } from './auth/logincustomer/logincustomer.component';
import { CartComponent } from './cart/cart.component';
import { ShowdetailsComponent } from './showdetails/showdetails.component';
import { HttpClientModule } from '@angular/common/http';
import { FictioncategoryComponent } from './fictioncategory/fictioncategory.component';
import { AdminComponent } from './admin/admin.component';
import { AddbookComponent } from './addbook/addbook.component';
import { WalletComponent } from './wallet/wallet.component';
import { ReviewsComponent } from './reviews/reviews.component'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    BookshomeComponent,
    SignupComponent,
    LogincustomerComponent,
    CartComponent,
    ShowdetailsComponent,
    FictioncategoryComponent,
    AdminComponent,
    AddbookComponent,
    WalletComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

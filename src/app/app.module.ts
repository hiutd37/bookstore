import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderTopComponent } from './components/header-top/header-top.component';
import { HeaderComponent } from './components/header/header.component';
import { SlideShowComponent } from './components/slide-show/slide-show.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './modules/home/home.component';
import { CategoriesBannerComponent } from './modules/home/categories-banner/categories-banner.component';
import { TrendingBannerComponent } from './modules/home/trending-banner/trending-banner.component';
import { ProductNewComponent } from './modules/home/product-new/product-new.component';
import { ProductComponent } from './components/product/product.component';
import { RegisterNowComponent } from './modules/home/register-now/register-now.component';
import { ShopComponent } from './modules/shop/shop.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProductShopComponent } from './modules/shop/product-shop/product-shop.component';
import { LoginComponent } from './modules/auth/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './modules/user/user.component';
import { RegisterComponent } from './modules/auth/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderTopComponent,
    HeaderComponent,
    SlideShowComponent,
    FooterComponent,
    HomeComponent,
    CategoriesBannerComponent,
    TrendingBannerComponent,
    ProductNewComponent,
    ProductComponent,
    RegisterNowComponent,
    ShopComponent,
    SidebarComponent,
    ProductShopComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

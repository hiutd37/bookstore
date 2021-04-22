import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderTopComponent } from './shared/layouts/header-top/header-top.component';
import { HeaderComponent } from './shared/layouts/header/header.component';
import { SlideShowComponent } from './shared/layouts/slide-show/slide-show.component';
import { FooterComponent } from './shared/layouts/footer/footer.component';
import { HomeComponent } from './modules/vlaunch/home/home.component';
import { CategoriesBannerComponent } from './modules/vlaunch/home/categories-banner/categories-banner.component';
import { TrendingBannerComponent } from './modules/vlaunch/home/trending-banner/trending-banner.component';
import { ProductNewComponent } from './modules/vlaunch/home/product-new/product-new.component';
import { ProductComponent } from './shared/components/product/product.component';
import { RegisterNowComponent } from './modules/vlaunch/home/register-now/register-now.component';
import { ShopComponent } from './modules/vlaunch/shop/shop.component';
import { SidebarComponent } from './shared/layouts/sidebar/sidebar.component';
import { LoginComponent } from './modules/auth/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './modules/auth/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormatPricePipe} from './core/pipes';
import { ProductListComponent } from './modules/vlaunch/shop/product-list/product-list.component';
import { ProductDetailComponent } from './modules/vlaunch/shop/product-detail/product-detail.component';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { ShoppingCartListComponent } from './modules/vlaunch/order/shopping-cart-list/shopping-cart-list.component';
import {ShoppingCartComponent} from './modules/vlaunch/order/shopping-cart/shopping-cart.component';
import {ShoppingPageComponent} from './modules/vlaunch/order/shopping-page.component';
import { AboutComponent } from './modules/vlaunch/about/about.component';
import { BlogComponent } from './modules/vlaunch/blog/blog.component';
import { PageComponent } from './modules/vlaunch/page/page.component';
import { ContactComponent } from './modules/vlaunch/contact/contact.component';
import { AlertComponent } from './components/alert/alert.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProfileUserComponent } from './modules/vlaunch/user/profile-user/profile-user.component';
import { ProductBannerItemComponent } from './modules/vlaunch/home/product-banner-item/product-banner-item.component';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatFileUploadModule} from 'mat-file-upload';
import {MatDialogModule} from '@angular/material/dialog';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CarouselComponent} from './shared/layouts/carousel/carousel.component';
import {QrCodeModule} from 'ng-qrcode';
import { PaymentComponent } from './modules/vlaunch/order/payment/payment.component';


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
        LoginComponent,
        RegisterComponent,
        FormatPricePipe,
        ProductListComponent,
        ProductDetailComponent,
        ShoppingCartComponent,
        ShoppingCartListComponent,
        ShoppingPageComponent,
        AboutComponent,
        BlogComponent,
        PageComponent,
        ContactComponent,
        AlertComponent,
        PageNotFoundComponent,
        ProfileUserComponent,
        ProductBannerItemComponent,
        CarouselComponent,
        PaymentComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    NgxPaginationModule,
    MatIconModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatSelectModule,
    MatFileUploadModule,
    MatDialogModule,
    NgbModule,
    QrCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

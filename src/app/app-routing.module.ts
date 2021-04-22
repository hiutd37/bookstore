import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './modules/vlaunch/home/home.component';
import {ShopComponent} from './modules/vlaunch/shop/shop.component';
import {LoginComponent} from './modules/auth/login/login.component';
import {RegisterComponent} from './modules/auth/register/register.component';
import {ProductDetailComponent} from './modules/vlaunch/shop/product-detail/product-detail.component';
import {ShoppingPageComponent} from './modules/vlaunch/order/shopping-page.component';
import {BlogComponent} from './modules/vlaunch/blog/blog.component';
import {PageComponent} from './modules/vlaunch/page/page.component';
import {ContactComponent} from './modules/vlaunch/contact/contact.component';
import {AboutComponent} from './modules/vlaunch/about/about.component';
import {ProfileUserComponent} from './modules/vlaunch/user/profile-user/profile-user.component';
import {PaymentComponent} from './modules/vlaunch/order/payment/payment.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent },
  {path: 'detail/:id', component: ProductDetailComponent },
  {path: 'shoppingbag', component: ShoppingPageComponent },
  {path: 'blog', component: BlogComponent },
  {path: 'page', component: PageComponent },
  {path: 'contact', component: ContactComponent },
  {path: 'about', component: AboutComponent },
  {path: 'profile', component: ProfileUserComponent },
  {path: 'checkout', component: PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

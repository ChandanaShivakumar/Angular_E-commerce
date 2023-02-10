import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { ChangepwdComponent } from './component/changepwd/changepwd.component';
import { CommentsComponent } from './component/comments/comments.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { OfferComponent } from './component/offer/offer.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { ProductComponent } from './component/product/product.component';
import { ProfileComponent } from './component/profile/profile.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { UserdashboardComponent } from './component/userdashboard/userdashboard.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { AuthGuard } from './shared/auth.guard';
import { ConfirmGuard } from './shared/confirm.guard';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'offer', component: OfferComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  {
    path: 'userdashboard',
    component: UserdashboardComponent,
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'changepwd', component: ChangepwdComponent }
    ],
    canActivate: [AuthGuard]
  },
  { path: 'product', component: ProductComponent, canActivate: [AuthGuard] },
  {
    path: 'product-details/:id',
    component: ProductDetailsComponent,
    children: [
      { path: 'comments', component: CommentsComponent },
    ]
  },
  { path: 'cart', component: CartComponent },
  { path: 'wishlist', component: WishlistComponent },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(x => x.AdminModule)
  },
  { path: "**", component: PageNotFoundComponent, canDeactivate: [ConfirmGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [LoginComponent, RegistrationComponent, HomeComponent, UserdashboardComponent,
  ProductComponent, ProductDetailsComponent, CartComponent, WishlistComponent, OfferComponent, ProfileComponent,
  ChangepwdComponent, PageNotFoundComponent, CommentsComponent]

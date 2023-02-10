import { NgModule, InjectionToken, Provider} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ProductService } from './product.service';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { CartService } from './cart.service';
import { WishlistService } from './wishlist.service';
import { AuthGuard } from './shared/auth.guard';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { AuthService } from './auth.service';
import { CommentsComponent } from './component/comments/comments.component';
import { ReadmoreDirective } from './customdirectives/readmore.directive';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/state/counter.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents,
    FilterPipe,
    SortPipe,
    CommentsComponent,
    ReadmoreDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    NgxWebstorageModule.forRoot(),
    StoreModule.forRoot({
      counter: counterReducer
    }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([])
  ],
  providers: [ProductService, CartService, WishlistService, AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

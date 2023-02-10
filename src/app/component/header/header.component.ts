import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { AuthService } from 'src/app/auth.service';
import { CartService } from 'src/app/cart.service';
import { WishlistService } from 'src/app/wishlist.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isLoggedIn = false;
  public totitem: number=0;
  public totitem1: number=0;
  public searchterm:string = '';

  constructor(private _cartservice : CartService, private _wishlistservice : WishlistService,private _localstorage : LocalStorageService, private router : Router, private _authservice: AuthService) { }

  ngOnInit(): void {
    this._cartservice.getProducts()
    .subscribe(res =>{
      this.totitem = res.length;
    })

    this._wishlistservice.getProducts()
    .subscribe(res =>{
      this.totitem1 = res.length;
    })
  }
  search(event:any){
    this.searchterm = (event.target as HTMLInputElement).value;
    this._cartservice.search.next(this.searchterm);
  }

  LogIn(): boolean{
    if(this._authservice.isLoggedin() === true){
      return true;
    }
    else
    {
      return false;
    }
  }

  logout(){
    this._localstorage.clear('users');
    this.router.navigate(['home'])
  }
}

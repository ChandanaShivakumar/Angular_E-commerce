import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { ProductService } from 'src/app/product.service';
import { WishlistService } from 'src/app/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  public products: any = [];
  public prods : any[] = [];
  public totitem1: number=0;
  
  //POSTS: any;
  page: number =1;
  //count: number=0;
  tableSize: number = 12;

  constructor(private _wishlistservice : WishlistService, private _prodlist: ProductService, private _cartservice : CartService) { }

  ngOnInit(): void {
    this._wishlistservice.getProducts()
    .subscribe( res =>{
      this.products = res;
    })

    this._wishlistservice.getProducts()
    .subscribe(res =>{
      this.totitem1 = res.length;
    })

    this.PL();
  }

  removeItem(item: any){
    this._wishlistservice.removeWLItem(item);
  }

  emptyList(){
    this._wishlistservice.removeAllItem();
  }

  addToCart(item: any){
    this._cartservice.addtoCart(item);
  }

  public PL(): void
  {
    this._prodlist.getProdList()
    .subscribe(data => {
      this.prods = data
  })
}

  onCardDataChange(event: any){
    this.page= event;
    this.PL();
  }
}

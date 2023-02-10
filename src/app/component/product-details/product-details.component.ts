import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CartService } from 'src/app/cart.service';
import { WishlistService } from 'src/app/wishlist.service';
import { CommentsService } from 'src/app/comments.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public inpname = "Comment here!";
  inputtext: string ="";
  public message = "";
  public products: any;
  public filterCategory:any;
  searchKey : string ='';
  destroy: boolean= true;

  id = this.route.snapshot.params['id'];

  constructor(private router: Router ,private route: ActivatedRoute, private http: HttpClient, private _cartservice: CartService, private _wishlistservice : WishlistService, private _commentservice : CommentsService) { }

  ngOnInit(){
    const url: string = `http://localhost:3000/products/${this.id}`;
    this.http.get(url).subscribe((response) => {
      this.products = response;
    });

    const url2: string = 'http://localhost:3000/products';
    this.http.get(url2).subscribe((response) => {
      this.filterCategory = response;
     });

    this._cartservice.search.subscribe((val : any)=>{
      this.searchKey = val;
     })

     this._commentservice.dataEmitter.subscribe((value)=>{
      this.inputtext = value;
     })
  }

  addToCart(item: any){
    this._cartservice.addtoCart(item);
  }

  addToWishList(item: any){
    this._wishlistservice.addtoWL(item);
  }

  filter(types: string, gender: string){
    this.filterCategory = this.products.filter((a:any)=>{
      if(a.types == types || types == ''){
        return a;
      }
    }),
    this.filterCategory = this.products.filter((a:any)=>{
      if(a.gender == gender || gender == ''){
        return a;
      }
    })
  }

  DestroyComponent(){
    this.destroy = false;
  }
}

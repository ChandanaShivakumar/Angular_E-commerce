import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LocalStorageService } from 'ngx-webstorage';
import { AuthService } from 'src/app/auth.service';
import { CartService } from 'src/app/cart.service';
import { decrement, increment } from 'src/app/counter/state/counter.actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  counter: number;
  public al: string ="payment successful"
  public us: any;
  public usname: string = "";
  public usemail: string = "";
  public products: any = [];
  public grandtot: number = 0;
  public totitem: number=0;
  constructor(private _cartservice : CartService, private auth: AuthService, private _localstorageservice: LocalStorageService, private store: Store<{counter:{counter: number}}>) {}

  ngOnInit(): void {
    this.us  = this._localstorageservice.retrieve('users');
    this.usname = this.us.name;
    this.usemail = this.us.email;

    this._cartservice.getProducts()
    .subscribe( res =>{
      this.products = res;
      this.grandtot = this._cartservice.getTotalPrice();
      this.totitem = res.length;
    })

    this.store.select('counter').subscribe((data)=>{
      this.counter = data.counter;
    });
  }

  options = {
    "key": "rzp_test_7HdkaZ1xFGPomB",
    "amount": 0,
    "name": "Infinito Pay",
    "description": "Test Transaction",
    "order_id": "", 
    "prefill": {
        "name": this.usname,
        "email": this.usemail
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#000"
    }
};

rzp1: any;
pay(){
  this.options.amount = this.grandtot * this.counter * 100;
  this.rzp1 = new this.auth.nativeWindow.Razorpay(this.options);
  this.rzp1.open();
  this._cartservice.removeAllItem();
  this.al;
}

  removeItem(item: any){
    this._cartservice.removeCartItem(item);
  }

  emptyCart(){
    this._cartservice.removeAllItem();
  }

  onIncrement(){
    this.store.dispatch(increment());
  }
  onDecrement(){
    if(this.counter>=2){
    this.store.dispatch(decrement());
    }
  }
}

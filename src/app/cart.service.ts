import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList : any= []
  public productList = new BehaviorSubject<any>([]); //BS - acts as observable(to subscribe) and also emits data
  public search = new BehaviorSubject<string>("");

  constructor() { }

  //getter and setter methods
  getProducts(){
    return this.productList.asObservable();
  }
  setProducts(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product)
  }

  addtoCart(product : any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a: any)=>{
      grandTotal += a?.price;
    })
    return grandTotal;
  }

  removeCartItem(product: any){
    var addNew=true;
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id === a.id && addNew){
        this.cartItemList.splice(index,1);
        addNew=false;
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllItem(){
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
}

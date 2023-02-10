import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  public wishList : any= []
  public productList = new BehaviorSubject<any>([]); //BS - acts as observable(to subscribe) and also emits data

  constructor() { }

  //getter and setter methods
  getProducts(){
    return this.productList.asObservable();
  }
  setProducts(product : any){
    this.wishList.push(...product);
    this.productList.next(product)
  }

  addtoWL(product : any){
    this.wishList.push(product);
    this.productList.next(this.wishList);
    console.log(this.wishList);
  }

  removeWLItem(product: any){
    var addNew=true;
    this.wishList.map((a:any, index:any)=>{
      if(product.id === a.id && addNew){
        this.wishList.splice(index,1);
        addNew=false;
      }
    })
    this.productList.next(this.wishList);
  }
  removeAllItem(){
    this.wishList = [];
    this.productList.next(this.wishList);
  }
}

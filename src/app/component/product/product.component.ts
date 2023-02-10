import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Router} from '@angular/router';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit, AfterViewInit {

  public prods : any[] = [];

  //POSTS: any;
  page: number =1;
  //count: number=0;
  tableSize: number = 12;
  Today = new Date();
  SortbyParam = '';
  SortbyDire = 'desc';
  types='';
  genders='';
  sizes='';
  searchKey : string ='';

  @ViewChildren("highlight")boldtext : QueryList<any>;

  constructor(private _prodlist: ProductService, private _cartservice: CartService, private router: Router) {}

  ngOnInit(){
   this.PL(); 

   this._cartservice.search.subscribe((val : any)=>{
    this.searchKey = val;
   })
  }

  ngAfterViewInit(){
    this.boldtext.first.nativeElement.style.color="Blue";
    this.boldtext.last.nativeElement.style.color="Blue";
  }

  public PL(): void
  {
    this._prodlist.getProdList()
    .subscribe(data => {
      this.prods = data

      this.prods.forEach((a:any) => {
        Object.assign(a,{quantity:1, total:a.price});
    });
  })
}

  onCardDataChange(event: any){
    this.page= event;
    this.PL();
  }

  onSortDire(){
    if(this.SortbyDire === 'desc'){
      this.SortbyDire = 'asc';
    }
    else{
      this.SortbyDire = 'desc';
    }
  }

  addToCart(item: any){
    this._cartservice.addtoCart(item);
  }
}
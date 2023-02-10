import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Store } from '@ngrx/store';
import * as userActions from 'src/app/user/user.actions'

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  public users: any;

  constructor(private _userlist: ProductService, private store : Store<any>) { }

  ngOnInit(): void {
    this.store.dispatch(new userActions.LoadUsers());
    this.store.subscribe(state =>(this.users = state.users.users));
    //this.UL();
  }

  // public UL(): void
  // {
  //   this._userlist.getUserList()
  //   .subscribe(data => {
  //     this.users = data
  //   })
  // }
}

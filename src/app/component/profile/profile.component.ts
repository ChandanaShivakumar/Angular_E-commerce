import { Component, Input, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {  
  public us: any;
  constructor(private _localstorageservice : LocalStorageService) { }

  ngOnInit(): void {
    this.us  = this._localstorageservice.retrieve('users')
  }

  genderCheck(): boolean{
    if(this.us.gender==="female" || this.us.gender==="Female"){
      return true;
    }
    else
    {
      return false;
    }
  }
}

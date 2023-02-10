import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  get nativeWindow() : any {
    return _window();
 }

  constructor(private _localstorageservice : LocalStorageService) { }

  isLoggedin(): boolean{
    if(this._localstorageservice.retrieve('users'))
    {
      return true;
    }
    else
    {
    return false;
    }
  }
}
function _window() : any {
  return window;
}


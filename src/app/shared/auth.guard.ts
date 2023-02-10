import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LocalStorageService} from 'ngx-webstorage';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _authservice : AuthService, private router: Router){}

  canActivate(): boolean{
    //if user is logged in or not
    /* if(this._authservice.IsLoggedIn()){
      return true;
    }
    
    alert("Login to View!")
    this.router.navigate(['login']);
    return false; */
    if(this._authservice.isLoggedin())
    {
      return true;
    }
    else{
      alert("Login to View!")
      this.router.navigate(['login']);
      return false;
    }
  }
}

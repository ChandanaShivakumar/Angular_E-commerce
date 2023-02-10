import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PageNotFoundComponent } from '../component/page-not-found/page-not-found.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmGuard implements CanDeactivate<PageNotFoundComponent> {
  canDeactivate(component: PageNotFoundComponent){
    if(component.isDirty)
    {
      return window.confirm("Are you sure?");
    }
    return false;
  }
  
}

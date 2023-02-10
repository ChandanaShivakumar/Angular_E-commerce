import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IProd } from './product';
import { IUser } from './user';

@Injectable()
export class ProductService {

  private _url: string = "http://localhost:3000/products";

  private _url1: string = "http://localhost:3000/users";


  constructor(private http: HttpClient) {}

   getProdList(): Observable<IProd[]>{
    return this.http.get<IProd[]>(this._url);
  }

  getUserList(): Observable<IUser[]>{
    return this.http.get<IUser[]>(this._url1);
  }
}

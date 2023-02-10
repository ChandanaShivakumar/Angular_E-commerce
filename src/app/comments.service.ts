import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  //using eventemitter
  //dataEmitter = new EventEmitter<string>(); //creating custom event

  //using rxjs subject
  dataEmitter = new Subject<string>();

  raiseDataEmitterEvent(data : string){
    //this.dataEmitter.emit(data);
    this.dataEmitter.next(data);
  }
  constructor() { }
}

import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { CommentsService } from 'src/app/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit, OnChanges, DoCheck, 
AfterContentInit, AfterContentChecked, OnDestroy{

  enteredtext:string ="";
  public texts : any[] = [];
  public comments: string ="";

  @Input() public parentData : any;
  @Output() public childEvent = new EventEmitter();

  constructor(private _commentservice : CommentsService, private _http: HttpClient) { 
    console.log("constructor called!")
  }

  ngOnChanges(changes: SimpleChanges): void { //gets called when angular app is called for the first time and whenever there is a change in some parameter
    console.log("ngOnChanges called!")
    console.log(changes);
  }

  ngDoCheck(){ //gets called everytime a change detection cycle is called
    console.log("ngDoCheck called!")
  }

  ngAfterContentInit(){ //gets called whne the component projected content has been fully initialized
    console.log("ngAfterContentInit called!")
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked called!")
  }

  ngOnDestroy(){
    console.log("ngDestroy called!")
  }

  ngOnInit(): void {
    console.log("ngOnInit called!")
  }

  fireEvent(item: string){
    this._commentservice.raiseDataEmitterEvent(this.enteredtext);

    this.childEvent.emit('You just added comments!Focus on the area to add more!');

    const obj = {};
    // this.texts.push(item)
    const json = Object.assign(obj, {comment : item});
    // console.log (typeof(json))
    this._http.post<any>("http://localhost:3000/comments", json)
    .subscribe((response) => {
      this.comments = response;
    });
    //this.texts.pop();
  }
}

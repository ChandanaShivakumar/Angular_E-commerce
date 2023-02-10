import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appReadmore]'
})
export class ReadmoreDirective implements OnInit{

  constructor(private element : ElementRef, private renderer: Renderer2) { //rendere2 - a class that allows us to manipulate the dom elements without accessing the dom directly.
    // So it provides a layer of abstraction between the dom element and the cpmponent code

  }

  ngOnInit(){
    this.renderer.addClass(this.element.nativeElement, 'data-toggle');
    this.renderer.addClass(this.element.nativeElement, 'data-placement');
  }

}

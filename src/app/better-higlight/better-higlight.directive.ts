import { Directive, Renderer2, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBeterHal]'
})
export class BeterHal implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit(){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }
}
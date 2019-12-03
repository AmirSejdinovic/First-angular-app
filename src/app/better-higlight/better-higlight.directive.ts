import { Directive, Renderer2, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBeterHal]'
})
export class BeterHal implements OnInit {
  
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit(){
   // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }
  //Ading hostListener directive for creating the dinamic hover
  @HostListener('mouseenter') mouseover(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }
  @HostListener('mouseleave') mouseleave(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  }
}
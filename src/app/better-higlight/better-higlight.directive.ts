import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBeterHal]'
})
export class BeterHal implements OnInit {
  //Using the @HostBinding directive and declakring the proprety with the type of string and adding initial value. In the directive argument we pased the prorpaty which wee overide
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit(){
   // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }
  //Ading hostListener directive for creating the dinamic hover
  @HostListener('mouseenter') mouseover(eventData: Event){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = 'blue';
  }
  @HostListener('mouseleave') mouseleave(eventData: Event){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = 'transparent';
  }
}
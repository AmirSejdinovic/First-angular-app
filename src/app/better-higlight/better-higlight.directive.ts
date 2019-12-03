import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBeterHal]'
})
export class BeterHal implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input('appBeterHal') heighLightColor: string = 'blue';
  //Using the @HostBinding directive and declakring the proprety with the type of string and adding initial value. In the directive argument we pased the prorpaty which wee overide
  @HostBinding('style.backgroundColor') backgroundColor: string;
  
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit(){
    this.backgroundColor = this.defaultColor;
   // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }
  //Ading hostListener directive for creating the dinamic hover
  @HostListener('mouseenter') mouseover(eventData: Event){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.heighLightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }
}
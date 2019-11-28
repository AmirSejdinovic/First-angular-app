//We must inport the input decorator from angular  core
import { 
  Component,
  OnInit, 
  Input, 
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked
 } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  //This propraty is to enable or disable Angular to setup shadowDom etc the emulated propreties in the html element. This propraty we need to import from ANgular core. The default proprati is emualted etc turn on. if we do not want to see the strange propraties in the html element we can switch it to none
  encapsulation: ViewEncapsulation.Emulated //None, Native
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked {
  //@input is the Angular decorator which allow us to export the property to the public, and we than can call that propraty in another module
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string; 

  constructor() { 
    console.log('constructor called');

  }

  ngOnChanges(changes: SimpleChanges){
     console.log('NgOnCanges called');
     console.log(changes);
  }

  ngOnInit() {
    console.log('NgIniti called');
  }
  ngDoCheck(){
    console.log("ngDoCheck called");
  }
  ngAfterContentInit(){
    console.log('ngAfter init called');
  }
  ngAfterContentChecked(){
    console.log('ngAfrer connte cehced');
  }
  ngAfterViewInit(){
    console.log('ng after w');
  }
  ngAfterViewChecked(){
    console.log('ng after wev chekded');
  }

}

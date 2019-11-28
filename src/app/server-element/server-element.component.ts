//We must inport the input decorator from angular  core
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  //This propraty is to enable or disable Angular to setup shadowDom etc the emulated propreties in the html element. This propraty we need to import from ANgular core. The default proprati is emualted etc turn on. if we do not want to see the strange propraties in the html element we can switch it to none
  encapsulation: ViewEncapsulation.Emulated //None, Native
})
export class ServerElementComponent implements OnInit {
  //@input is the Angular decorator which allow us to export the property to the public, and we than can call that propraty in another module
  @Input('srvElement') element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit() {
  }

}

//We must inport the input decorator from angular  core
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  //@input is the Angular decorator which allow us to export the property to the public, and we than can call that propraty in another module
  @Input() element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit() {
  }

}

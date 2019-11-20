import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  selector: 'app-servers',
  /*template: `
  <app-server></app-server>

  <app-server></app-server>`,*/
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  //cerating proprti for bindin propraty
    allowNewServer = false;

  constructor() { 
    //Creating setTimeout method with es6 funciton declaration
    setTimeout(() =>{
      this.allowNewServer = true;
    },2000);

  }

  ngOnInit() {
  }

}

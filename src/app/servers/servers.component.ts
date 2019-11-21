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
    //Creating proprety for event binidng
    serverCreationStatus = 'No server was created';
    serverName = 'Testserver';
    serverCreated = false;
    //Creating array for ngFor
    servers = ['Testserver','Testserver2'];

  constructor() { 
    //Creating setTimeout method with es6 funciton declaration
    setTimeout(() =>{
      this.allowNewServer = true;
    },2000);

  }

  ngOnInit() {
  }
  //Creating method which will be triger out when someone click on button with this method calling
  onCreateServer(){
    this.serverCreated = true;
    //On clikc adding the servers proprety the server name via push method this method added the input in to array
    this.servers.push(this.serverName);
     this.serverCreationStatus = 'Server was created: Name is' + this.serverName;
  }
  //Creating method for change the propraty with input values
 /* onUpdateServerName(event: Event){
       // this.serverName = event.target.value;
  }*/
}

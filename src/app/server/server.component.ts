//Importing Comopnnent from angular core
import { Component } from '@angular/core';
//I declare the angular decorator, the decorator is the whay we said angular what we'll going to build in this file. In this decorator we specifie the configuration for the component like the html sleector. Here I also created the temlate url that is the relative path to the .html file which is hold in the folder of the component and it is the temlate for displying
@Component({
    selector: 'app-server',//html selector
    templateUrl: './server.component.html',//path to the template file in the folder of component we use relative path because of webpack bundeling
    styles: [`
        .online{
          color: white;
        }
        
      `]
})

//Here I created the class with name ServerComponent and before the class i put keyword export. This export keyword means thah angular can catch this class from another file
export class ServerComponent{
  //Creating class propreties which we'll display on front end. I also here creeate typescirpt type propratie
    serverId: number = 10;
     serverStatus: string = 'offline';
     constructor(){
       this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
     }
     //Creating method in the class that returns the value of proprati in the top of this class. This method we can call in the .html component file and dinamicly output the data
     getServerStatus(){
       return this.serverStatus;
     }
     //Creating method getColor in which is returning value of color for ngStyle directive
     getColor(){
       //Retunr the value for proprety servesstatus with terniari operateor if is online than is grean and if is offline than is the red
       return this.serverStatus === 'online' ? 'green' : 'red';
     }
}
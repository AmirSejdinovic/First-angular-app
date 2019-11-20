//Importing Comopnnent from angular core
import { Component } from '@angular/core';
//I declare the angular decorator, the decorator is the whay we said angular what we'll going to build in this file. In this decorator we specifie the configuration for the component like the html sleector. Here I also created the temlate url that is the relative path to the .html file which is hold in the folder of the component and it is the temlate for displying
@Component({
    selector: 'app-server',//html selector
    templateUrl: './server.component.html'//path to the template file in the folder of component we use relative path because of webpack bundeling
})

//Here I created the class with name ServerComponent and before the class i put keyword export. This export keyword means thah angular can catch this class from another file
export class ServerComponent{

}
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name:"test server", content:'Just a test'}];
//Creating the methond inside this class which will have argument of server data which will expects the object element with keys we provided below
  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    //this will push the element inside the serverElements array
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }
//Creating another method wtih argument blueprintData which expects the object element with keys
  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    //Pushingh the bluprint data into serverElements array
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }
 

  onChangeFirst(){
     this.serverElements[0].name = 'Changed';
  }
}

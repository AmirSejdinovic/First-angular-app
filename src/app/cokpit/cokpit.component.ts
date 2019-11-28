import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cokpit',
  templateUrl: './cokpit.component.html',
  styleUrls: ['./cokpit.component.css']
})
export class CokpitComponent implements OnInit {
  //We creating the propreties in this class with same name of the propretise we pased in the another component where we will fatch the data. @Output decorator is the angurlar core decorator which enables us to output data from this component to another comopnent where we will fetch it and proces
  //new EventEmitter is the anguralr class which enables us to emit the data with the method emit()
  //Here we creted the new instance of EventEmitter 
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>(); 
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  //newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }
//Creating the method onAddServer. 
  onAddServer(nameInput: HTMLInputElement) {
    
    //Here we emit with EventEmitter emit() method the propretise
  this.serverCreated.emit({serverName: nameInput.value, serverContent: this.newServerContent});
  }
//Creating the metodh onAddBLueprint
  onAddBlueprint(nameInput: HTMLInputElement) {
    this.bluePrintCreated.emit({serverName: nameInput.value, serverContent: this.newServerContent});
  }

}

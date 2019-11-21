import { Component } from '@angular/core';

@Component({
  selector: 'vjezba-app',
  templateUrl: './input.component.html',
  styleUrls: ['./input.style.css']
})

export class ExcersiceApp{
  prikazTeksta = 'Test';
  emptyString = this.prikazTeksta;
  prikazitekst = '';
  klikni(){
    this.prikazitekst = "Unešeni imput je" + this.prikazTeksta;
  }
}
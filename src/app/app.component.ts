import { Component, OnInit } from '@angular/core';
import { AccauntService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccauntService]
})
export class AppComponent implements OnInit  {
   accounts: {name: string, status: string}[] = [];

   constructor(private aSe: AccauntService){}


  ngOnInit(){
    this.accounts = this.aSe.accounts;
  }
  
}

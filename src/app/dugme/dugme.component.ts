import { Component } from '@angular/core';

@Component({
  selector: '.dugmeApp',
  templateUrl: './dugme.component.html',
  styles: [`
  .dugmeApp{
      width: 100%;
      bakcground: black;
      color: white;
    }
  `]
})
export class Dugme{
     showSecret = false;
     log = [];

     onToggleDisplay(){
       this.showSecret = !this.showSecret;
       //this.log.push(this.log.length + 1);
       this.log.push(new Date());
     }
}
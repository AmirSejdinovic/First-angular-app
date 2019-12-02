import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//Importing from file the directive class name
import { BasicHeighDirective } from './basic-heighlight/basic-heiglight.directive';


import { AppComponent } from './app.component';

//Importing the custom directice
@NgModule({
  declarations: [
    AppComponent,
    BasicHeighDirective
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

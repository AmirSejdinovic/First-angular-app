import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
//Importing the created ServerComponent from the relative path
import { ServerComponent } from './server/server.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent//Adding the ServerComponent in the NgModule class, with this angular knows that we have ServerComponent and it will render it
  ],
  imports: [
    BrowserModule
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

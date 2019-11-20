import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
//Importing the created ServerComponent from the relative path
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    
  ],
  imports: [
    BrowserModule
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

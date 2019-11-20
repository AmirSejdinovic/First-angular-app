import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
//Importing the created ServerComponent from the relative path
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { Warning } from './warning/warning.component';
import { SuccessComponent } from './success/success.component';



@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    Warning,
    SuccessComponent
    
    
  ],
  imports: [
    BrowserModule
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

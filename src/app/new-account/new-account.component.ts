import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccauntService } from '../account.service';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {
 

  constructor(private logginService: LoggingService, private acountSerice: AccauntService){
        
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.acountSerice.addAccount(accountName, accountStatus);

    this.logginService.logStatusChange(accountStatus);
    
    //console.log('A server status changed, new status: ' + accountStatus);
  }
}

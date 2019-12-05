import { Component, Input } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccauntService } from '../account.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  

  constructor(private logginService: LoggingService, private acounteService: AccauntService){

  }


  onSetTo(status: string) {
      this.acounteService.updateStatus(this.id, status);
    // this.logginService.logStatusChange(status);
  }
}

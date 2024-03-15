import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AccountService } from './service/account.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  standalone: true,
  imports: [TranslateModule],
})
export default class ClientesComponent implements OnInit{
  constructor(private readonly accountService: AccountService) {}
  ngOnInit(): void {
    this.getAccounts();
  }

  getAccounts(){
    this.accountService.getAccounts('api/v1/accounts').subscribe((item)=>{
      console.log("Datos: ", item);
    })
  }
}

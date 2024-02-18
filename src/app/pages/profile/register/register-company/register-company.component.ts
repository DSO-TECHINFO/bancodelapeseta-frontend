import { Component } from '@angular/core';

@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.component.html',
  styleUrl: './register-company.component.css'
})
export class RegisterCompanyComponent {
  imgBancoP = "assets/icon/bancoP.png";

  name = 'value';
  company = {

    name: "",
    taxId: "",
    password: "",
    address: "",
    addressAdditionalInfo: "",
    addressTown: "",
    addressCity: "",
    addressCountry: "",
    postalCode: "",
    email: "",
    phoneNumber: ""
  }

  onRegister() {


  }
}

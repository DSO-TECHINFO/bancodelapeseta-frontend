import { Injectable } from '@angular/core';

const SMS_CODE = "smsCode";
const EMAIL_CODE = "emailCode";
const EMAIL_EXP_CODE = "emailExpCode";
const SMS_EXP_CODE = "smsExpCode";

@Injectable({
  providedIn: 'root'
})
export class VerificationCodeService {

  constructor() { }

  public setSmsCode(code: string): void{
    window.sessionStorage.removeItem(SMS_CODE);
    window.sessionStorage.setItem(SMS_CODE, code);
  }

  public getSmsCode(): string | null{
    return sessionStorage.getItem(SMS_CODE);
  }

  public setSmsExpCode(dateExp: string): void{
    window.sessionStorage.removeItem(SMS_EXP_CODE);
    window.sessionStorage.setItem(SMS_EXP_CODE, dateExp);
  }

  public getSmsExpCode(): string | null{
    return sessionStorage.getItem(SMS_EXP_CODE);
  }

  public setEmailCode(code: string): void{
    window.sessionStorage.removeItem(EMAIL_CODE);
    window.sessionStorage.setItem(EMAIL_CODE, code);
  }

  public getEmailCode(): string | null{
    return sessionStorage.getItem(EMAIL_CODE);
  }

  public setEmailExpCode(dateExp: string): void{
    window.sessionStorage.removeItem(EMAIL_EXP_CODE);
    window.sessionStorage.setItem(EMAIL_EXP_CODE, dateExp);
  }

  public getEmailExpCode(): string | null{
    return sessionStorage.getItem(EMAIL_EXP_CODE);
  }

}

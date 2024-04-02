import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy,Component,OnInit,inject,} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet, RouterLink } from '@angular/router';
import { WInputComponent } from '@/SHARED/Widgets/w-input/input-app';
import { TransferService } from '../service/transfer.service';
import { ITransaction } from '../interface/transfer.interface';
import { ToastrService } from 'ngx-toastr';
import { SharedAccountNumberService } from '../service/sharedAccountNumber.service';
import { ChangeDetectorRef } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-transfer',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ReactiveFormsModule,
    WInputComponent,
    RouterLink,
    TranslateModule
  ],
  templateUrl: './transfer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TransferComponent implements OnInit {
  _tansferService = inject(TransferService);
  _cdr = inject(ChangeDetectorRef) as ChangeDetectorRef;
  toastr = inject(ToastrService);

  dataCodeVerification = {
    emailCode: '123456',
    phoneCode: '123456',
    sign: '123456',
  };
  accountNumber:string = '';

  constructor(private readonly _fb: FormBuilder, private  accountNumberService: SharedAccountNumberService) {}
  ngOnInit(): void {
    this.accountNumberService.accountNumberShared.subscribe({
      next:(data)=>{
        this.accountNumber = data;
        this._cdr.detectChanges();
      }
    });
  }

  public readonly formTransfer = this._fb.group({
    beneficiaryName: ['', [Validators.required]],
    destinationAccount: ['', [Validators.required]],
    concept: ['', [Validators.required]],
    description: ['', [Validators.required]],
    amount: ['', [Validators.required]],
  });

  verifyData() {
    if (this.formTransfer.valid) {
      let objTransferForm: ITransaction;
      this._tansferService
        .postVerificationCode(
          'api/v1/verify/transaction/signed',
          this.dataCodeVerification
        )
        .subscribe(data => {
          objTransferForm = {
            verificationCode: data.verificationCode,
            payerAccount: this.accountNumber, //Se envia el número de cuenta del usuario que realiza la operación
            destinationAccount:this.formTransfer.value.destinationAccount || '',
            beneficiaryName: this.formTransfer.value.beneficiaryName || '',
            concept: this.formTransfer.value.concept || '',
            description: this.formTransfer.value.description || '',
            amount: this.formTransfer.value.amount || '',
          };
          this._tansferService
            .postTransfer('api/v1/transfers/create', objTransferForm)
            .subscribe({
              error: () => {
                this.showerror('Transfer error.');
              },
              complete: () => {
                this.showsuccess('Successful transfer.');
              },
            });
        });
    }
  }
  showsuccess(msg: string) {
    this.toastr.success(msg, 'Success');
  }
  showerror(error: string) {
    this.toastr.error(error, 'Error');
  }
}

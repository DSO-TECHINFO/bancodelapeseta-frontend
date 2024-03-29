import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy,Component,inject,} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet, RouterLink } from '@angular/router';
import { WInputComponent } from '@/SHARED/Widgets/w-input/input-app';
import { TransferService } from '../service/transfer.service';
import { ITransaction } from '../interface/transfer.interface';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-transfer',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ReactiveFormsModule,
    WInputComponent,
    RouterLink,
  ],
  templateUrl: './transfer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TransferComponent {
  _tansferService = inject(TransferService);
  toastr = inject(ToastrService);

  dataCodeVerification = {
    emailCode: '123456',
    phoneCode: '123456',
    sign: '123456',
  };

  constructor(private readonly _fb: FormBuilder) {}

  public readonly formTransfer = this._fb.group({
    beneficiaryName: ['', [Validators.required]],
    destinationAccount: ['', [Validators.required]],
    payerName: ['', [Validators.required]],
    payerAccount: ['', [Validators.required]],
    concept: ['', [Validators.required]],
    description: ['', [Validators.required]],
    amount: ['', [Validators.required]],
    currency: ['', [Validators.required]],
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
            beneficiaryName: this.formTransfer.value.beneficiaryName || '',
            destinationAccount:
              this.formTransfer.value.destinationAccount || '',
            payerName: this.formTransfer.value.payerName || '',
            payerAccount: this.formTransfer.value.payerAccount || '',
            concept: this.formTransfer.value.concept || '',
            description: this.formTransfer.value.description || '',
            amount: this.formTransfer.value.amount || '',
            currency: this.formTransfer.value.currency || 'EUR',
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
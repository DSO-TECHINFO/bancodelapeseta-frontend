import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet, RouterLink } from '@angular/router';
import { TransferService } from '../service/transfer.service';
import { ITransferPart } from '../interface/transferPart.interface';
import { WInputComponent } from '@/SHARED/Widgets/w-input/input-app';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-transfer',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet, ReactiveFormsModule,WInputComponent,RouterLink
  ],
  templateUrl: './transfer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TransferComponent implements OnInit{ 

  hiddenModal = false;
  
  toggleModal() {
    this.hiddenModal = !this.hiddenModal;
  }

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _ts: TransferService  ) {}

  ngOnInit(): void {
    return
  }

  public readonly formTransfer = this._fb.group({
    beneficiaryName: ['', [Validators.required]],
    destinationAccount: [,[Validators.required]],
  });


  verifyData() {
    if (this.formTransfer.valid) {
      let data:ITransferPart = {
        beneficiaryName: this.formTransfer.value.beneficiaryName || '',
        destinationAccount: this.formTransfer.value.destinationAccount || 0,
      };
      this._ts.partDataObservableTransfer = data;
      this.formTransfer.reset(); 
      this.toggleModal();
    }
  }
}
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WInputComponent } from '@/SHARED/Widgets/w-input/input-app';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-trading-options',
  standalone: true,
  imports: [
    CommonModule,
    WInputComponent, 
    ReactiveFormsModule
  ],
  templateUrl: './trading-options.component.html',
  styleUrl: './trading-options.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TradingOptionsComponent {
  constructor(private readonly  _fb: FormBuilder) {}

  public readonly formTransfer = this._fb.group({
      beneficiaryName: '',
      destinationAccount:'',
      payerName:'',
      payerAccount:'',
      concept:'',
      description:'',
      amount:'',
      currency:'',
      verificationCode:'' 
  });

  showModal = false;
  toggleModal(){
    this.showModal = !this.showModal;
  }
  verifyData(){
    return true;
  }
 }

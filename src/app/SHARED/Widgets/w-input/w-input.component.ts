import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Injector,
  OnInit,
  forwardRef,
} from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms';

import { FormsModule } from '@angular/forms';
@Component({
  selector: 'w-input',
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule, FormsModule],
  templateUrl: './w-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => WInputComponent),
      multi: true,
    },
  ],
})
export class WInputComponent implements ControlValueAccessor, OnInit {
  changeValue(value: string): void {
    this.value = value;
    this.onTouched?.();
    this.onChange?.(value);
  }

  onChange?: (v: string) => void;
  onTouched?: () => void;

  value: string | null = '';
  ngControl?: NgControl | null;

  constructor(private readonly cdRef: ChangeDetectorRef,private readonly injector:Injector) {}
  ngOnInit() {
    this.ngControl = this.injector.get(NgControl);
  }
  writeValue(value: string | null): void {
    this.value = value;
    this.cdRef.markForCheck();
  }
  registerOnChange(fn: (v: string) => void): void {
    this.onChange = fn;
    
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  // setDisabledState?(isDisabled: boolean): void {
  //   throw new Error('Method not implemented.');
  // }
}

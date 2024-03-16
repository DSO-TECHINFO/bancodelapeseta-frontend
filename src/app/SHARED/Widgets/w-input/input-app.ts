import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Output, EventEmitter, inject } from '@angular/core';
import { FormGroup, Validators, FormControl, ReactiveFormsModule, ControlContainer, ValidatorFn } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-w-input',
  standalone: true,
  imports: [
    CommonModule, IonicModule, ReactiveFormsModule
  ],
  viewProviders: [{
    provide: ControlContainer,
    useFactory: () => inject(ControlContainer, {skipSelf: true})
  }],
  templateUrl: './input-app.html',
  styleUrls: ['./input-app.css']

})
export class WInputComponent implements OnInit {
  @Input({ required: true}) controlKey: string = '';
  @Input() label: string = '';
  @Input() inputType: string = '';
  @Input() error: string = '';
  @Input() pattern: string = '';
  @Input() required: boolean = false;
  @Input() minLength?: number;
  @Input() maxLength?: number;

  @Input() placeholder?: string = '';
  @Input() patternDate?: string = '';
  // @Input() inputConfigs: any[] = [];
  // @Input() form: FormGroup = new FormGroup({ control: new FormControl('') });

  @Output() digitInput = new EventEmitter<any>();

  // constructor(private formBuilder: FormBuilder) {}

  parentContainer = inject(ControlContainer);

  get parentFormGroup(){
    return this.parentContainer.control as FormGroup;
  }

  ngOnInit(): void {
    this.parentFormGroup.addControl(this.controlKey, new FormControl('', this.getValidators()));
  }

  private getValidators(): ValidatorFn | ValidatorFn[] | null{
    const validators: ValidatorFn[] = [];

    if(this.required) {
      validators.push(Validators.required);
    }
    if(this.inputType == "email"){
      validators.push(Validators.email);
    }
    if(this.pattern){
      validators.push(Validators.pattern(this.pattern));
    }
    if (this.minLength) {
      validators.push(Validators.minLength(this.minLength));
    }
    if (this.maxLength) {
      validators.push(Validators.maxLength(this.maxLength));
    }

    return validators.length > 0 ? validators : null;
  }

  onDigitInput(event: any) {
    const value = event.target.value;
    let next = event.target.nextElementSibling;
    const keyCode = event.key;
    const currentValue = event.target.value;

    // console.log("en input app-w-input: ", event);
    // console.log("currentValue.length: ", currentValue.length > 1);
    // console.log("keyCode < 48: ", keyCode < 48);
    // console.log("keyCode > 57: ", keyCode > 57);
    // Solo permite números del 1 al 9 y evita otros caracteres
    // if (keyCode < 48 || keyCode > 57 || currentValue.length > 1) {
    //   event.preventDefault();
    //   return;
    // }

    if ((!/^[0-9]$/.test(keyCode)) || currentValue.length >= 1) {
      event.preventDefault();
      return;
    }

    this.digitInput.emit({ event });

  }
  autoResizeTextArea(event: any) {
    const textarea = event.target;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }
  // onDigitInput(event: any) {
  //   this.digitInput.emit({ event });
  // }

  // // Método para obtener el control específico del formulario por nombre
  // getFormControl(name: string): AbstractControl {
  //   return this.form.get(name) ?? new FormControl();
  // }


}

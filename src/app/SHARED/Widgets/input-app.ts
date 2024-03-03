import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Output, EventEmitter, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl, ReactiveFormsModule, ControlContainer } from '@angular/forms';
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
  styles: []
})
export class WInputComponent implements OnInit {
  @Input({ required: true}) controlKey: string = '';
  @Input() label: string = '';
  // @Input() inputConfigs: any[] = [];
  // @Input() form: FormGroup = new FormGroup({ control: new FormControl('') }); // Input para recibir el formulario reactivo desde el componente padre
  @Output() digitInput = new EventEmitter<any>();

  // constructor(private formBuilder: FormBuilder) {}

  parentContainer = inject(ControlContainer);

  get parentFormGroup(){
    return this.parentContainer.control as FormGroup;
  }

  ngOnInit(): void {
    this.parentFormGroup.addControl(this.controlKey, new FormControl('', Validators.required));
    // No es necesario inicializar el formulario aquí
  }

  onDigitInput(event: any) {
    const value = event.target.value;
    let next = event.target.nextElementSibling;
    const keyCode = event.key;
    const currentValue = event.target.value;

    console.log("en input app-w-input: ", event);
    console.log("currentValue.length: ", currentValue.length > 1);
    console.log("keyCode < 48: ", keyCode < 48);
    console.log("keyCode > 57: ", keyCode > 57);
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
    // if(next){
    //   next.focus();
    // }else{
    //   event.target.blur();
    // }

  }

  // onDigitInput(event: any) {
  //   this.digitInput.emit({ event });
  // }

  // // Método para obtener el control específico del formulario por nombre
  // getFormControl(name: string): AbstractControl {
  //   return this.form.get(name) ?? new FormControl();
  // }


}

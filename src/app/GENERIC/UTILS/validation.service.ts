import { ElementRef, Injectable, QueryList } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  constructor() {}

  onDigitInputFocusNext(inputIndex: number, inputRefs: QueryList<ElementRef>): void {
    // const value = inputRefs.toArray()[inputIndex]?.nativeElement.firstChild?.value;

    // Validaciones específicas, por ejemplo, permitir solo números
    // if (!/^[0-9]$/.test(value) || value.length >= 1) {
    //   return;
    // }

    //Comentario para commit de prueba

    const nextIndex = inputIndex + 1;
    console.log("Fuera del if");
    if (nextIndex < inputRefs.length) {
      console.log("En el if");
      const nextInputRef = inputRefs.get(nextIndex);
      if (nextInputRef) {
        const nextInput = nextInputRef.nativeElement.firstChild;
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  }
}

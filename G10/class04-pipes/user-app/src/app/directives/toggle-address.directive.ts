import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appToggleAddress]',
})
export class ToggleAddressDirective {
  constructor(private elementRef: ElementRef) {}

  @HostListener('click') onClick() {
    const addressDetails =
      this.elementRef.nativeElement.querySelector('.address__details');

    addressDetails.classList.toggle('hide');
  }
}

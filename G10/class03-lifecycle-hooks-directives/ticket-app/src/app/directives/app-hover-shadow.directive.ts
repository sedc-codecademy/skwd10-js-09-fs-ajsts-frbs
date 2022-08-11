import {
  Directive,
  ElementRef,
  OnInit,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHoverShadow]',
})
export class AppHoverShadowDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    console.log(this.elementRef);
  }

  ngOnInit(): void {
    // this.elementRef.nativeElement.style.fontFamily = "serif"
    // this.elementRef.nativeElement.style.boxShadow =
    //   '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)';
  }

  @HostListener('mouseenter') mouseEnter() {
    // this.elementRef.nativeElement.style.boxShadow =
    //   '0 4px 8px rgba(0,0,0,0.16), 0 4px 8px rgba(0,0,0,0.23)';
    this.renderer.setStyle(
      //1. The dom element
      this.elementRef.nativeElement,
      //2. The css rule
      'box-shadow',
      //3. The rule value
      '0 4px 8px rgba(0,0,0,0.16), 0 4px 8px rgba(0,0,0,0.23)'
    );
  }

  @HostListener('mouseleave') mouseLeave() {
    // this.elementRef.nativeElement.style.boxShadow = 'none';
    this.renderer.setStyle(
      //1. The dom element
      this.elementRef.nativeElement,
      //2. The css rule
      'box-shadow',
      //3. The rule value
      'none'
    );
  }
}

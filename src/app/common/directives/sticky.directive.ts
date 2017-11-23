import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSticky]'
})
export class StickyDirective {

  private _minY: number = 88;
  private _className: string = 'isStick';

  public constructor(
    private _elementRef: ElementRef
  ) { }

  @HostListener('window:scroll')
  public handleScrollEvent(): void {
    if (window.pageYOffset > this._minY) {
      this._elementRef.nativeElement.classList.add(this._className);
    } else {
      this._elementRef.nativeElement.classList.remove(this._className);
    }
  }

}

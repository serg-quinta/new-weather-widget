import { Directive, ElementRef, Input, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appSticky]'
})
export class StickyDirective implements OnInit {

  private _minY = 88;
  private _className = 'isStick';

  public constructor(
    private _elementRef: ElementRef
  ) { }

  @HostListener('window:scroll')
  handleScrollEvent(e) {
    if (window.pageYOffset > this._minY) {
      this._elementRef.nativeElement.classList.add(this._className);
    } else {
      this._elementRef.nativeElement.classList.remove(this._className);
    }
  }

  ngOnInit(): void {
    console.log(this._elementRef);
  }
}

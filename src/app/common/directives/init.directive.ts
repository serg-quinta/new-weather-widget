import { Directive, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[appInit]'
})
export class InitDirective implements OnInit {

  @Input()
  public place: Place;

  @Input()
  public first: boolean;

  @Output()
  public chooseFirst: EventEmitter<Place> = new EventEmitter();

  public ngOnInit(): void {
    this.first
      ? this.chooseFirst.emit(this.place)
      : null;
  }

}

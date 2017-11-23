import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { placeTypes } from '../../../data';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  public placeTypes: string[] = placeTypes;

  @Output()
  public onFilterChange: EventEmitter<string> = new EventEmitter();

  public buttonClick(value: string): void {
    this.onFilterChange.emit(value);
  }
}

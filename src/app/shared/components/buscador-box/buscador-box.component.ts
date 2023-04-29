import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'shared-buscador-box',
  templateUrl: './buscador-box.component.html',
  styles: [
  ]
})
export class BuscadorBoxComponent {
  @Input()
  public placeholder: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  emitValue( value: string ):void {
    this.onValue.emit( value );
  }
}

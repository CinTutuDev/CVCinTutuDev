import { Component } from '@angular/core';
import { BdcintutdevService } from 'src/app/services/bdcintutdev.service';

@Component({
  selector: 'shared-inspiracion',
  templateUrl: './inspiracion.component.html',
  styles: [
  ]
})
export class InspiracionComponent {

  constructor(public Bd: BdcintutdevService) {}

}

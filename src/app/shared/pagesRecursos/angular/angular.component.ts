import { Component } from '@angular/core';
import { BdcintutdevService } from 'src/app/services/bdcintutdev.service';

@Component({
  selector: 'shared-angular',
  templateUrl: './angular.component.html',
  styles: [],
})
export class AngularComponent {
  constructor(public Bd: BdcintutdevService) {}
}

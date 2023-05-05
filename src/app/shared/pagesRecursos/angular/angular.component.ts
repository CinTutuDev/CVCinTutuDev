import { Component } from '@angular/core';
import { BdcintutdevService } from 'src/app/services/bdcintutdev.service';

@Component({
  selector: 'shared-angular',
  templateUrl: './angular.component.html',
  styles: [
     `
    /*   img {
        width: 100px;
      }
      img.poster {
        width: 250px;
      } */
    `,
  ],
})
export class AngularComponent {
  constructor(public Bd: BdcintutdevService) {}
}

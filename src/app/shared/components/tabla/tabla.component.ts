import { Component, Input } from '@angular/core';
import { BdcintutdevService } from 'src/app/services/bdcintutdev.service';

@Component({
  selector: 'repositorios-tabla',
  templateUrl: './tabla.component.html',
  styles: [
    `
      img {
        width: 50px;
      }
      img.poster {
        width: 250px;
      }
    `,
  ],
})
export class TablaComponent {
  constructor(public Bd: BdcintutdevService) {}
}

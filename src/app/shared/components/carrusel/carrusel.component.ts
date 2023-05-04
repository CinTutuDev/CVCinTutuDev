import { Component } from '@angular/core';
import { BdcintutdevService } from 'src/app/services/bdcintutdev.service';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styles: [
    `
      .d-block {
        height: 200px;
        width: 100%;
        object-fit: cover;
      }
    `,
  ],
})
export class CarruselComponent {
  constructor(public Bd: BdcintutdevService) {}
}

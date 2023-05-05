import { Component } from '@angular/core';
import { BdcintutdevService } from 'src/app/services/bdcintutdev.service';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styles: [],
})
export class CarruselComponent {
  constructor(public Bd: BdcintutdevService) {}
}

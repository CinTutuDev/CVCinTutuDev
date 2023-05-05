import { Component } from '@angular/core';
import { BdcintutdevService } from 'src/app/services/bdcintutdev.service';

@Component({
  selector: 'app-carruselAngular',
  templateUrl: './carrusel-angular.component.html',
  styles: [],
})
export class CarruselAngularComponent {
  constructor(public Bd: BdcintutdevService) {}
}

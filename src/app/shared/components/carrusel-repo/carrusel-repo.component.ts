import { Component } from '@angular/core';
import { BdcintutdevService } from 'src/app/services/bdcintutdev.service';
@Component({
  selector: 'app-carruselRepo',
  templateUrl: './carrusel-repo.component.html',
  styles: [],
})
export class CarruselRepoComponent {
  constructor(public Bd: BdcintutdevService) {}
}

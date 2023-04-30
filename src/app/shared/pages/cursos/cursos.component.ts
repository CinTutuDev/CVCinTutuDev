import { Component } from '@angular/core';
import { BdcintutdevService } from 'src/app/services/bdcintutdev.service';

@Component({
  selector: 'shared-cursos',
  templateUrl: './cursos.component.html',
})
export class CursosComponent {
  constructor(public Bd: BdcintutdevService) {}
}

import { Component } from '@angular/core';
import { BdcintutdevService } from 'src/app/services/bdcintutdev.service';

@Component({
  selector: 'shared-repositorios',
  templateUrl: './repositorios.component.html',
  styles: [],
})
export class RepositoriosComponent {
  constructor(public Bd: BdcintutdevService) {}
}

import { Component, Input } from '@angular/core';
import { BdcintutdevService } from 'src/app/services/bdcintutdev.service';

@Component({
  selector: 'shared-cursos',
  templateUrl: './cursos.component.html',
})
export class CursosComponent {
  /* 
  @Input() height= 500;
  @Input() isFullScrenn= false;
  @Input() items : BdcintutdevService[]= [];
  
  public finalH: string | number=0;
  public currentPos = 0; */
  
  constructor(public Bd: BdcintutdevService) {
    /* this.finalH = this.isFullScrenn? '100vh' : `${this.height}px` */
  }
}

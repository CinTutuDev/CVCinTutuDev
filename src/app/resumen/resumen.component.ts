import { BdcintutdevService } from './../services/bdcintutdev.service';
import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.scss']
})
export class ResumenComponent implements OnInit {

  parrafo = 250;



  constructor(public Bd: BdcintutdevService){

  }
  ngOnInit(): void {
/*     this.Bd */
  }

}

import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ProyectoM } from 'src/app/models/proyecto.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [],
})
export class ModalComponent {
  /* heredo del componente padre... */
  @Input() proyectoListaData!: ProyectoM;
 

  constructor(private modalService: NgbModal) {}

  openBackDropCustomClass(content: any) {
    this.modalService.open(content, {
      backdropClass: 'fondo-modal',
      size:'lg',
      centered: true,
     
      /*  centered: true,
      windowClass: 'centrado-modal', */
    });
  }
}

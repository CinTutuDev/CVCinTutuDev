import { Component } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss'],
})
export class ProyectosComponent {
  proyecto = {
    id: 0,
    urlPg: 'https://rickmortyangular.web.app/',
    urlImage: '/assets/images/proyecto/R&M.jpg',
    urlGH: 'https://github.com/CinTutuDev/RickMorty',
    ico: '/assets/icos/rym.png',
    titulo: 'Rick & Morty',
    descripcion:
      'Explorador de Personajes de Rick y Morty: Proyecto realizado con Angular y Bootstrap con Integración de la API de Rick y Morty',
  };
}

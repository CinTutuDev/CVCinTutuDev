import { ProyectoM } from 'src/app/models/proyecto.model';

export const PROYECTO: ProyectoM[] = [
  {
    id: 0,
    urlPg: 'https://rickmortyangular.web.app/',
    urlImage: 'assets/images/proyecto/rym.jpg',
    urlGH: 'https://github.com/CinTutuDev/RickMorty',
    ico: '/assets/icos/rym.png',
    titulo: 'Rick & Morty',
    descripcion:
      'Explorador de Personajes de Rick y Morty: Proyecto realizado con Angular y Bootstrap con Integración de la API de Rick y Morty',
    demo: '/assets/videos/demoR&M.mp4',
  },
  {
    id: 4,
    urlPg: 'https://github.com/CinTutuDev/AngularCRUD',
    urlImage: '/assets/images/proyecto/gym.png',
    urlGH: 'https://github.com/CinTutuDev/AngularCRUD',
    ico: '/assets/icos/corredor.jpg',
    titulo: 'GYM Angular CRUD',
    descripcion:
      'Angular 15 que utiliza la biblioteca de componentes MateriaUI. Además, se integra con Json-Server para el registro y gestión de usuarios en un contexto de un gimnasio.',
    demo: '',
  },

  {
    id: 1,
    urlPg: 'https://cinta-s-news.web.app/',
    urlImage: '/assets/images/proyecto/noticias.png',
    urlGH: 'https://github.com/CinTutuDev/CintasNews',
    ico: 'assets/icos/hipo.png',
    titulo: 'Cinta´s News',
    descripcion: 'Aplicación de noticias desarrollada con Angular e Ionic',
    demo: '',
  },
  {
    id: 2,
    urlPg: 'https://tutus-movies.firebaseapp.com/',
    urlImage: '/assets/images/proyecto/tutusMovies.png',
    urlGH: 'https://github.com/CinTutuDev/TutusMovies',
    ico: 'assets/icos/camara32px.png',
    titulo: 'Tutu´s Movies',
    descripcion:
      'Aplicación que muestra películas actuales, uso de storage, consumo de APIS y mucho más. ',
    demo: '',
  },
  {
    id: 3,
    urlPg: '',
    urlImage: '/assets/images/proyecto/maqueta.png',
    urlGH: 'https://github.com/CinTutuDev/AppMaqueta',
    ico: 'assets/icos/Triki.png',
    titulo: 'App Maqueta',
    descripcion:
      'Aplicación que utiliza todos los componentes de Ionic como maquetas para su diseño.',
    demo: '',
  },
];

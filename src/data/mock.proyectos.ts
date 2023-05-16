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
    id: 1,
    urlPg: 'https://github.com/CinTutuDev/AngularCRUD',
    urlImage: '/assets/images/proyecto/gym.png',
    urlGH: 'https://github.com/CinTutuDev/AngularCRUD',
    ico: '/assets/icos/corredor.jpg',
    titulo: '',
    descripcion:
      'La aplicación está desarrollada utilizando Angular 15, Angular Material y Bootstrap como herramientas principales. Su objetivo es permitir el registro de usuarios para un gimnasio mediante la creación de un archivo JSON.',
    demo: '/assets/videos/demoGYM.mp4',
  },

  {
    id: 2,
    urlPg: 'https://cinta-s-news.web.app/',
    urlImage: '/assets/images/proyecto/noticias.png',
    urlGH: 'https://github.com/CinTutuDev/CintasNews',
    ico: 'assets/icos/hipo.png',
    titulo: 'Cinta´s News',
    descripcion: 'Aplicación de noticias hecha con Angular e Ionic 6, lo que la hace compatible tanto para dispositivos móviles como para sobremesa. Esta plataforma se conecta a una API para obtener información actualizada de noticias. Permite a los usuarios explorar noticias, marcarlas como favoritas y eliminarlas de la lista de favoritos. Además, ofrece la opción de guardar y cancelar acciones. Si una noticia resulta interesante, los usuarios pueden hacer clic para acceder a más detalles. Con una interfaz intuitiva y personalizable, esta aplicación proporciona una experiencia completa y actualizada al mantenerse al tanto de las últimas noticias.',
    demo: '/assets/videos/demoNews.mp4',
  },
  {
    id: 3,
    urlPg: 'https://tutus-movies.firebaseapp.com/',
    urlImage: '/assets/images/proyecto/tutusMovies.png',
    urlGH: 'https://github.com/CinTutuDev/TutusMovies',
    ico: 'assets/icos/camara32px.png',
    titulo: 'Tutu´s Movies',
    descripcion:
      'Aplicación móvil hecha con Angular e Ionic es una plataforma para explorar películas. Permite hacer scroll horizontal en la cartelera, cargar más películas, ver descripciones detalladas, guardar favoritos y por géneros. Incluye un buscador, usa almacenamiento local y consume una API de películas',
    demo: '/assets/videos/demoTutusMovies.mp4',
  },
  {
    id: 4,
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

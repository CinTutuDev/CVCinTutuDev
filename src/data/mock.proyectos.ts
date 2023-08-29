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
    urlPg: '',
    urlImage: '/assets/images/proyecto/gym.png',
    urlGH: 'https://github.com/CinTutuDev/AngularCRUD',
    ico: '/assets/icos/corredor.jpg',
    titulo: 'GYM TuTu´s',
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
      'App que te ofrece un ejemplo completo y funcional de una aplicación hecha con Ionic. Con casi todos los componentes de Ionic y ejemplos prácticos, puedes utilizarla como referencia para tus proyectos futuros. Es una herramienta valiosa que te ahorrará tiempo y esfuerzo al proporcionarte código y configuraciones listas para usar. En resumen, "App Maqueta" es un recurso útil para desarrollar proyectos de Ionic de manera eficiente.',
    demo: '/assets/videos/demoAppMaqueta.mp4',
  },
  {
    id: 5,
    urlPg: '',
    urlImage: '/assets/images/proyecto/LogoRP.png',
    urlGH: 'https://github.com/CinTutuDev/FCT-RitaPoP',
    ico: '/assets/icos/icoRP.png',
    titulo: 'FCT RitaPoP',
    descripcion:
      'El proyecto es un CRM desarrollado durante un bootcamp en la empresa Imatia, utilizando Angular en el frontend y Java Spring Boot en el backend. Cuenta con funcionalidades de visualización de datos y roles de usuarios. Permite gestionar clientes, visualizar ventas y asignar roles de administrador o gestor. El proyecto demuestra habilidades en desarrollo de aplicaciones CRM y en la implementación de funcionalidades clave para la gestión de clientes y ventas.',
    demo: '/assets/videos/demoRitaPoP1.mp4',
  },
  {
    id: 6,
    urlPg: 'https://tutu-gifs.netlify.app/',
    urlImage: '/assets/images/proyecto/gifs.png',
    urlGH: 'https://github.com/CinTutuDev/GifsApp',
    ico: '/assets/icos/gif.png',
    titulo: 'Tutu Gifs',
    descripcion:
      'El proyecto del curso "Angular: de cero a experto" con Fernando Herrera abarca los siguientes elementos: Modularización de la aplicación, componentes, ViewChild, servicios, historial de bsuquedas, Api Keys, LocalStorage, peticiones HTTP',
    demo: '/assets/videos/demoTutuGifs.mp4',
  },
  {
    id: 7,
    urlPg: 'https://app-country-explore.netlify.app/',
    urlImage: '/assets/images/proyecto/appCountry.png',
    urlGH: 'https://github.com/CinTutuDev/CountryApp',
    ico: '/assets/icos/country.png',
    titulo: 'App Country',
    descripcion:
      'En mi recorrido con el curso "Angular: de cero a experto" de Fernando Herrera, construí otra aplicación abordando conceptos clave: Rutas y navegación; Componentes personalizados; Manejo de datos y tipado; Consumo de APIs y optimización; Uso avanzado de RxJS; Almacenamiento local; Patrones de diseño y reutilización. Desde fundamentos de Single Page Applications hasta carga perezosa, la app de países exploró sugerencias, debouncing y estados de consulta. ',
    demo: '/assets/videos/demoAppCountry.mp4',
  },
];

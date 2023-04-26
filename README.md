# 🚀 Descripción del proyecto

Mi proyecto de Curriculum Vitae (CV) desarrollado con Angular CLI 15 y Angular Material te permitirá visualizar toda la información sobre mi experiencia laboral, educación, habilidades y demás en tiempo real y de manera interactiva.<br> Ya no más aburridas listas sin vida, ahora podrás conocerme de manera más amena y divertida.

## Funcionalidades

* Visualización de información en tiempo real y de manera interactiva.
* Actualización automática de los datos gracias a la conexión a una base de datos en Firebase.
* Sección de experiencia laboral, educación, habilidades y otros datos personales.
* Diseño amigable y moderno.
* Con esta sección, quiero que conozcas las habilidades y conocimientos que he puesto en práctica en este proyecto y cómo puedo destacar en el mundo laboral gracias a él. Espero que lo disfrutes tanto como yo he disfrutado desarrollándolo.

# <p align="center"><img src="https://readme-typing-svg.demolab.com?  font=Libre+Baskerville&size=45&duration=3100&pause=500&color=ff3d5c&center=true&vCenter=true&width=940&lines=CVWebCinTutuDev" align="middle" alt="fotosgram"  width="100%"/>
![bannerGH2](https://user-images.githubusercontent.com/71487857/234256705-f0b3ae7e-de83-46fb-9050-52208533e533.png)
 </p> 
 
 <header>
  <div class="profile" align="center">
    <img src="https://user-images.githubusercontent.com/71487857/234249382-58656620-3cb9-4d49-b99c-10ff0ae2bb82.png" alt="Foto de perfil">
  </div>
</header>
 
 ## 🎮  Creo el proyecto con las URL :

* Framework: Angular

```
https://angular.io/cli
```
 ##  📌 Versiones
 ```
Angular CLI: 15.2.6
Node: 18.12.1
Package Manager: npm 8.19.2
OS: win32 x64
```
## Tpis comandos

* Componente sin archivo de prueba
```
ng g c resumen --skip-tests
```
## Creo la Base de Datos en firebase

* 1º Creo proyecto en firebase:
```
https://firebase.google.com/
```
* 2º Voy a Compilación lo despliego entro en Real Database
* 3º Seleccona el proyecto de Cloud Firestore:
```
Modo de prueba
Es el modo recomendado si recién comienzas a usar las bibliotecas cliente para dispositivos móviles y la Web, pero permite que todos lean y reemplacen tus datos. Después de realizar las pruebas, asegúrate de revisar la sección Protege tus datos.
Si quieres comenzar a usar la Web, las plataformas de Apple o el SDK de Android, selecciona el modo de prueba.
Modo bloqueado
```
* 4º Vamos a Database y en reglas ponemos solo lectura: 
```
{
  "rules": {
    ".read": true,
    ".write": false
  }
}
```
* 5º Imagen de la elboración de la BD:

![imgBDfirebas](https://user-images.githubusercontent.com/71487857/233594497-3a48378e-a7d8-4599-a140-b03356fa267b.PNG)

* 6º Para coger la url y JSON: 

![urlJSON](https://user-images.githubusercontent.com/71487857/233630122-74973d23-1010-438c-98dc-18999e5d07a8.png)

```
https://cintutudev-default-rtdb.firebaseio.com/Educaci%C3%B3n.json
```
## Crear servicio 
```
ng g s services/bdcintutdev  --skip-tests
```
* Creo enviroments
* Hago peticion y compruebo:
```

  AptitudesBD() {
    this.http.get<any>(`${URL}/Aptitudes.json`).subscribe((res) => {
      this.aptitudes = res;
      console.log(res);
    });
  }
 ```


## Créditos y Agradecimientos

- Plantilla de Github utilizada como base para este proyecto: https://github.com/Anders87x/Template_CVAbastidas_Angular
- Creador de la plantilla: Anders87x


<p align="center" style="width: 100%;">
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=cintutudev&repo=CVCinTutuDev&show_icons=true&locale=es&layout=compact&theme=radical&langs_count=6" alt="cintutudev" />
</p>


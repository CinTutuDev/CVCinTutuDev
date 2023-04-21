
# <p align="center"><img src="https://readme-typing-svg.demolab.com?  font=Libre+Baskerville&size=45&duration=3100&pause=500&color=ff3d5c&center=true&vCenter=true&width=940&lines=RecursosCinTutuDev" align="middle" alt="fotosgram"  width="100%"/>
 ![banner-125](https://user-images.githubusercontent.com/71487857/233059265-2fb3ff6c-24b4-4919-a708-c3121bd44c1f.png)
 </p> 
 
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
 


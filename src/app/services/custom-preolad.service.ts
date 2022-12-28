import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomPreoladService implements PreloadingStrategy {

  constructor() { }

  preload(route: Route, load: () => Observable<any>): Observable<any>{
  // en este caso estamos condicionando que si en la data de una ruta existe la bandera preoload, nos precargue la pagina
    if (route.data && route.data['preoload']) {
      return load();
    }
    return of(null)
  }
}

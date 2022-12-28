import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { TokenService } from './../services/token.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

constructor(
  private tokenService: TokenService,
  private router: Router
) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const token = this.tokenService.getToken();
      if(!token){
        // si no existe el token, entonces retorna un false impidiendo acceso y tambien nos redirecciona al home
        this.router.navigate(['/home']);
        return false;
      }
      // si nuestro guardian comprueba que existe token, entonces nos permite el acceso
      return true;
  }

}

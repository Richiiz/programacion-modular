import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CategoryComponent } from './pages/category/category.component';
import { MycartComponent } from './pages/mycart/mycart.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';

// por cada ruta vamos a tener un render unico
const routes: Routes = [
  {
    // esto lo que hace es redireccionar la pagina por defecto al home :D
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    // si no le ponemos un texto en path, renderiza por defecto la pagina al entrar
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'Not-Found',
    component: NotFoundComponent
  },
  { // como se necesita recibir un parametro por url se pone el id
    path: 'category/:id',
    component: CategoryComponent
  },
  {
    path: 'My-Cart',
    component: MycartComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'Register',
    component: RegisterComponent
  },
  {
    path: 'Recovery',
    component: RecoveryComponent
  },
  {
    // el doble asterisco indica que no encuentra la ruta
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

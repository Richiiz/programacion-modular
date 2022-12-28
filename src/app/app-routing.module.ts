import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './website/components/layout/layout.component';
import { HomeComponent } from './website/pages/home/home.component';
import { NotFoundComponent } from './website/pages/not-found/not-found.component';
import { CategoryComponent } from './website/pages/category/category.component';
import { MycartComponent } from './website/pages/mycart/mycart.component';
import { LoginComponent } from './website/pages/login/login.component';
import { RegisterComponent } from './website/pages/register/register.component';
import { RecoveryComponent } from './website/pages/recovery/recovery.component';
import { ProductDetailComponent } from './website/pages/product-detail/product-detail.component';


// por cada ruta vamos a tener un render unico
const routes: Routes = [
  {
    // esto lo que hace es redireccionar la pagina por defecto al home :D
    path: '',
    component: LayoutComponent,
    children: [
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
  { // cuando envie el product y el id nos lleva a la pagina product-detail
    path: 'product/:id',
    component: ProductDetailComponent
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
    ]
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

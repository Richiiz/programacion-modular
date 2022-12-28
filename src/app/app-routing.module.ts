import { NgModule } from '@angular/core';
// preoloadAllModules nos realiza la funcion de precarga de modulos :D
import { RouterModule, Routes, PreloadAllModules} from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { CustomPreoladService } from './services/custom-preolad.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./website/website.module').then(m => m.WebsiteModule),
    // esta es la bndera que comprueba nuestra condicion del custom-preoload
    data: {
      preload: true
    }
  },
  {
    path: 'cms',
    loadChildren: () => import('./cms/cms.module').then(m => m.CmsModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // aqui le indicamos la estrategia de precarga
    preloadingStrategy: CustomPreoladService
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'iphone',
    loadChildren: () => import('./iphone/iphone.module').then( m => m.IphonePageModule)
  },
  {
    path: 'samsung',
    loadChildren: () => import('./samsung/samsung.module').then( m => m.SamsungPageModule)
  },
  {
    path: 'tecno',
    loadChildren: () => import('./tecno/tecno.module').then( m => m.TecnoPageModule)
  },
  {
    path: 'commande',
    loadChildren: () => import('./commande/commande.module').then( m => m.CommandePageModule)
  },
  
    ];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

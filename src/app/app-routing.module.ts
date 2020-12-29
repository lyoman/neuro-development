import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tebs/tebs.module').then(m => m.TebsPageModule),
  },
  { path: '', loadChildren: './tebs/tebs.module#TebsPageModule' },
  { path: 'teb1', loadChildren: './teb1/teb1.module#Teb1PageModule' },
  { path: 'teb2', loadChildren: './teb2/teb2.module#Teb2PageModule' },
  { path: 'teb3', loadChildren: './teb3/teb3.module#Teb3PageModule' },
  // { path: 'teb4', loadChildren: './teb4/teb4.module#Teb4PageModule' },
  {
    path: 'aboutus',
    loadChildren: () => import('./aboutus/aboutus.module').then( m => m.AboutusPageModule)
  },
  {
    path: 'contactus',
    loadChildren: () => import('./contactus/contactus.module').then( m => m.ContactusPageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./help/help.module').then( m => m.HelpPageModule)
  },
  {
    path: 'teb4',
    loadChildren: () => import('./teb4/teb4.module').then( m => m.Teb4PageModule)
  },
  {
    path: 'division',
    loadChildren: () => import('./training/division/division.module').then( m => m.DivisionPageModule)
  },
  {
    path: 'division/details',
    loadChildren: () => import('./training/division/view-division/view-division.module').then( m => m.ViewDivisionPageModule)
  },
  {
    path: 'algebra',
    loadChildren: () => import('./training/algebra/algebra.module').then( m => m.AlgebraPageModule)
  },
  {
    path: 'algebra/details',
    loadChildren: () => import('./training/division/view-division/view-division.module').then( m => m.ViewDivisionPageModule)
  },
  {
    path: 'sequential',
    loadChildren: () => import('./memory/sequential/sequential.module').then( m => m.SequentialPageModule)
  },
  {
    path: 'sequential/footprints',
    loadChildren: () => import('./memory/footprints/footprints.module').then( m => m.FootprintsPageModule)
  },
  {
    path: 'sequential/animals',
    loadChildren: () => import('./memory/animals/animals.module').then( m => m.AnimalsPageModule)
  },
  {
    path: 'sequential/anime',
    loadChildren: () => import('./memory/anime/anime.module').then( m => m.AnimePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

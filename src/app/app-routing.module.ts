import { FolderPageModule } from './folder/folder.module';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  // {
  //   path: 'folder',
  //   loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule),
  // },
  {
    path: '',
    loadChildren: () => import('./tebs/tebs.module').then(m => m.TebsPageModule),
  },
  { path: '', loadChildren: './tebs/tebs.module#TebsPageModule' },
  { path: 'teb1', loadChildren: './teb1/teb1.module#Teb1PageModule' },
  { path: 'teb2', loadChildren: './teb2/teb2.module#Teb2PageModule' },
  { path: 'teb3', loadChildren: './teb3/teb3.module#Teb3PageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

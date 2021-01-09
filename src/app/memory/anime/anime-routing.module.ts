import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimePage } from './anime.page';

const routes: Routes = [
  {
    path: '',
    component: AnimePage
  },
  {
    path: 'results',
    loadChildren: () => import('./results/results.module').then( m => m.ResultsPageModule)
  },
  {
    path: 'choose-correct',
    loadChildren: () => import('./choose-correct/choose-correct.module').then( m => m.ChooseCorrectPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimePageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FootprintsPage } from './footprints.page';

const routes: Routes = [
  {
    path: '',
    component: FootprintsPage
  },
  {
    path: 'choose-correct',
    loadChildren: () => import('./choose-correct/choose-correct.module').then( m => m.ChooseCorrectPageModule)
  },
  {
    path: 'results',
    loadChildren: () => import('./results/results.module').then( m => m.ResultsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FootprintsPageRoutingModule {}

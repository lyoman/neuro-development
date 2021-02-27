import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimalsPage } from './animals.page';

const routes: Routes = [
  {
    path: '',
    component: AnimalsPage
  },
  {
    path: 'results',
    loadChildren: () => import('./results/results.module').then( m => m.ResultsPageModule)
  },
  {
    path: 'choose-correct',
    loadChildren: () => import('./choose-correct/choose-correct.module').then( m => m.ChooseCorrectPageModule)
  },  {
    path: 'animals-tryagain',
    loadChildren: () => import('./animals-tryagain/animals-tryagain.module').then( m => m.AnimalsTryagainPageModule)
  },
  {
    path: 'tryagain-results',
    loadChildren: () => import('./tryagain-results/tryagain-results.module').then( m => m.TryagainResultsPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalsPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MathPage } from './math.page';

const routes: Routes = [
  {
    path: '',
    component: MathPage
  },
  {
    path: 'results',
    loadChildren: () => import('./results/results.module').then( m => m.ResultsPageModule)
  },
  {
    path: 'choose-correct',
    loadChildren: () => import('./choose-correct/choose-correct.module').then( m => m.ChooseCorrectPageModule)
  },  {
    path: 'math-tryagain',
    loadChildren: () => import('./math-tryagain/math-tryagain.module').then( m => m.MathTryagainPageModule)
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
export class MathPageRoutingModule {}

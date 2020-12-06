import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlgebraPage } from './algebra.page';

const routes: Routes = [
  {
    path: '',
    component: AlgebraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlgebraPageRoutingModule {}

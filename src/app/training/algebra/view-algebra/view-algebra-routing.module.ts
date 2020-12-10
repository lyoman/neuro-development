import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAlgebraPage } from './view-algebra.page';

const routes: Routes = [
  {
    path: '',
    component: ViewAlgebraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewAlgebraPageRoutingModule {}

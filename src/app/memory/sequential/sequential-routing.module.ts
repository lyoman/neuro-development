import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SequentialPage } from './sequential.page';

const routes: Routes = [
  {
    path: '',
    component: SequentialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SequentialPageRoutingModule {}

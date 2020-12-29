import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FootprintsPage } from './footprints.page';

const routes: Routes = [
  {
    path: '',
    component: FootprintsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FootprintsPageRoutingModule {}

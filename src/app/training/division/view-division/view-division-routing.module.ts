import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewDivisionPage } from './view-division.page';

const routes: Routes = [
  {
    path: '',
    component: ViewDivisionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewDivisionPageRoutingModule {}

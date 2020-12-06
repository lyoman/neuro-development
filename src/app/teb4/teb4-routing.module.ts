import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Teb4Page } from './teb4.page';

const routes: Routes = [
  {
    path: '',
    component: Teb4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Teb4PageRoutingModule {}

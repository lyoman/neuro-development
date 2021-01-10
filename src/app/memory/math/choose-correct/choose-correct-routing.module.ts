import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseCorrectPage } from './choose-correct.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseCorrectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseCorrectPageRoutingModule {}

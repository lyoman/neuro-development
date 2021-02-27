import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimalsTryagainPage } from './animals-tryagain.page';

const routes: Routes = [
  {
    path: '',
    component: AnimalsTryagainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalsTryagainPageRoutingModule {}

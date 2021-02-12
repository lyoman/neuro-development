import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FootstepsTryagainPage } from './footsteps-tryagain.page';

const routes: Routes = [
  {
    path: '',
    component: FootstepsTryagainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FootstepsTryagainPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuardianPage } from './guardian.page';

const routes: Routes = [
  {
    path: '',
    component: GuardianPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuardianPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TryagainResultsPage } from './tryagain-results.page';

const routes: Routes = [
  {
    path: '',
    component: TryagainResultsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TryagainResultsPageRoutingModule {}

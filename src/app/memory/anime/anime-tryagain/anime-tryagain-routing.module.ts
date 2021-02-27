import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimeTryagainPage } from './anime-tryagain.page';

const routes: Routes = [
  {
    path: '',
    component: AnimeTryagainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimeTryagainPageRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TebsPageRoutingModule } from './tebs-routing.module';


import { TebsPage } from './tebs.page';

const routes: Routes = [
  {
    path: '',
    component: TebsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TebsPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TebsPage]
})
export class TebsPageModule {}

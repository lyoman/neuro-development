import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewDivisionPageRoutingModule } from './view-division-routing.module';

import { ViewDivisionPage } from './view-division.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewDivisionPageRoutingModule
  ],
  declarations: [ViewDivisionPage]
})
export class ViewDivisionPageModule {}

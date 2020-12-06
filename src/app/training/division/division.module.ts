import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DivisionPageRoutingModule } from './division-routing.module';

import { DivisionPage } from './division.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DivisionPageRoutingModule
  ],
  declarations: [DivisionPage]
})
export class DivisionPageModule {}

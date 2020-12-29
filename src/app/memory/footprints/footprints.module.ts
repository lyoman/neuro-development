import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FootprintsPageRoutingModule } from './footprints-routing.module';

import { FootprintsPage } from './footprints.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FootprintsPageRoutingModule
  ],
  declarations: [FootprintsPage]
})
export class FootprintsPageModule {}

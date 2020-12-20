import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SequentialPageRoutingModule } from './sequential-routing.module';

import { SequentialPage } from './sequential.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SequentialPageRoutingModule
  ],
  declarations: [SequentialPage]
})
export class SequentialPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseCorrectPageRoutingModule } from './choose-correct-routing.module';

import { ChooseCorrectPage } from './choose-correct.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseCorrectPageRoutingModule
  ],
  declarations: [ChooseCorrectPage]
})
export class ChooseCorrectPageModule {}

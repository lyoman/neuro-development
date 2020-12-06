import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Teb4PageRoutingModule } from './teb4-routing.module';

import { Teb4Page } from './teb4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Teb4PageRoutingModule
  ],
  declarations: [Teb4Page]
})
export class Teb4PageModule {}

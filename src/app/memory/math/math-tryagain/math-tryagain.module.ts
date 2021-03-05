import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MathTryagainPageRoutingModule } from './math-tryagain-routing.module';

import { MathTryagainPage } from './math-tryagain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MathTryagainPageRoutingModule
  ],
  declarations: [MathTryagainPage]
})
export class MathTryagainPageModule {}

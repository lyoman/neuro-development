import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlgebraPageRoutingModule } from './algebra-routing.module';

import { AlgebraPage } from './algebra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlgebraPageRoutingModule
  ],
  declarations: [AlgebraPage]
})
export class AlgebraPageModule {}

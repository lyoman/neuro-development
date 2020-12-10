import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewAlgebraPageRoutingModule } from './view-algebra-routing.module';

import { ViewAlgebraPage } from './view-algebra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAlgebraPageRoutingModule
  ],
  declarations: [ViewAlgebraPage]
})
export class ViewAlgebraPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimalsTryagainPageRoutingModule } from './animals-tryagain-routing.module';

import { AnimalsTryagainPage } from './animals-tryagain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimalsTryagainPageRoutingModule
  ],
  declarations: [AnimalsTryagainPage]
})
export class AnimalsTryagainPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FootstepsTryagainPageRoutingModule } from './footsteps-tryagain-routing.module';

import { FootstepsTryagainPage } from './footsteps-tryagain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FootstepsTryagainPageRoutingModule
  ],
  declarations: [FootstepsTryagainPage]
})
export class FootstepsTryagainPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TryagainResultsPageRoutingModule } from './tryagain-results-routing.module';

import { TryagainResultsPage } from './tryagain-results.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TryagainResultsPageRoutingModule
  ],
  declarations: [TryagainResultsPage]
})
export class TryagainResultsPageModule {}

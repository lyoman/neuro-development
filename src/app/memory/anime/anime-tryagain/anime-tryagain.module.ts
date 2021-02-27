import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimeTryagainPageRoutingModule } from './anime-tryagain-routing.module';

import { AnimeTryagainPage } from './anime-tryagain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimeTryagainPageRoutingModule
  ],
  declarations: [AnimeTryagainPage]
})
export class AnimeTryagainPageModule {}

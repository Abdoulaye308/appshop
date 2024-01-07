import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TecnoPageRoutingModule } from './tecno-routing.module';

import { TecnoPage } from './tecno.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TecnoPageRoutingModule
  ],
  declarations: [TecnoPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TecnoPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamsungPageRoutingModule } from './samsung-routing.module';

import { SamsungPage } from './samsung.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SamsungPageRoutingModule
  ],
  declarations: [SamsungPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class SamsungPageModule {}

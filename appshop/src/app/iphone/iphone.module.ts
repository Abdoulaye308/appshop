import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IphonePageRoutingModule } from './iphone-routing.module';

import { IphonePage } from './iphone.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IphonePageRoutingModule
  ],
  declarations: [IphonePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class IphonePageModule {}

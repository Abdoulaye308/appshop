// inscription.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Assurez-vous d'ajouter ceci

import { IonicModule } from '@ionic/angular';

import { InscriptionPageRoutingModule } from './inscription-routing.module';

import { InscriptionPage } from './inscription.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule, // Ajoutez le module pour les formulaires réactifs
    InscriptionPageRoutingModule
  ],
  declarations: [InscriptionPage]
})
export class InscriptionPageModule {}

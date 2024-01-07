import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Importez FormsModule


import { CommandePage } from './commande.page';

const routes: Routes = [
  {
    path: '',
    component: CommandePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule],
  exports: [RouterModule],

})
export class CommandePageRoutingModule {}

// Conteúdo completo de src/app/utilities/utilities.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { UtilitiesPageRoutingModule } from './utilities-routing.module';
import { UtilitiesPage } from './utilities.page';

// IMPORTAÇÃO ADICIONADA
import { FormsModule } from '@angular/forms'; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule, // <- ADICIONADO AQUI
    IonicModule,
    UtilitiesPageRoutingModule
  ],
  declarations: [UtilitiesPage]
})
export class UtilitiesPageModule {}
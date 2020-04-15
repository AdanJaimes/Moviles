import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComidaDetallePageRoutingModule } from './comida-detalle-routing.module';

import { ComidaDetallePage } from './comida-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComidaDetallePageRoutingModule
  ],
  declarations: [ComidaDetallePage]
})
export class ComidaDetallePageModule {}

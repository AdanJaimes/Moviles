import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComidaDetallePage } from './comida-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: ComidaDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComidaDetallePageRoutingModule {}

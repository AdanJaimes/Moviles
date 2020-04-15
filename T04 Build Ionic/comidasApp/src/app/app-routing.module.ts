import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'principal', pathMatch: 'full' },
  { 
    path: 'principal', 
    children:[{
      path:'',
    loadChildren: () => import('./principal/principal.module').then( m => m.PrincipalPageModule)
    },
    {
    path: ':comidaId',
    loadChildren: () => import('./principal/comida-detalle/comida-detalle.module').then( m => m.ComidaDetallePageModule),

  }
]

  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

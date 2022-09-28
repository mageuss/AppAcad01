import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu-principal',
    pathMatch: 'full'
  },
  {
    path: 'dados-pessoais',
    loadChildren: () => import('./paginas/dados-pessoais/dados-pessoais.module').then( m => m.DadosPessoaisPageModule)
  },
  {
    path: 'notas',
    loadChildren: () => import('./paginas/notas/notas.module').then( m => m.NotasPageModule)
  },
  {
    path: 'financeiro',
    loadChildren: () => import('./paginas/financeiro/financeiro.module').then( m => m.FinanceiroPageModule)
  },
  {
    path: 'menu-principal',
    loadChildren: () => import('./paginas/menu-principal/menu-principal.module').then( m => m.MenuPrincipalPageModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./paginas/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./paginas/alert/alert.module').then( m => m.AlertPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

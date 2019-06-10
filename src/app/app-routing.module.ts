import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ListarContatoComponent } from './contato/listar-contato/listar-contato.component';
import { SalvarContatoComponent } from './contato/salvar-contato/salvar-contato.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'salvar', component: SalvarContatoComponent},
  { path: 'listar', component: ListarContatoComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

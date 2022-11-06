import { MonitoramentoComponent } from './page/monitoramento/monitoramento.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContratoCadastrarComponent } from './page/contrato/contrato-cadastrar/contrato-cadastrar.component';
import { ContratoComponent } from './page/contrato/contrato.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "monitoramento" },
  { path: "monitoramento", component: MonitoramentoComponent},
  { path: "contrato", component: ContratoComponent},
  { path: "contrato-cadastrar", component: ContratoCadastrarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

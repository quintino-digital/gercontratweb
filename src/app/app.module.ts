import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuLateralComponent } from './component/menu-lateral/menu-lateral.component';
import { ContratoCadastrarComponent } from './page/contrato/contrato-cadastrar/contrato-cadastrar.component';
import { ContratoComponent } from './page/contrato/contrato.component';
import { MonitoramentoComponent } from './page/monitoramento/monitoramento.component';

@NgModule({
  declarations: [
    AppComponent,
    ContratoComponent,
    ContratoCadastrarComponent,
    MonitoramentoComponent,
    MenuLateralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

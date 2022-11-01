import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContratoComponent } from './page/contrato/contrato.component';
import { ContratoCadastrarComponent } from './page/contrato/contrato-cadastrar/contrato-cadastrar.component';

@NgModule({
  declarations: [
    AppComponent,
    ContratoComponent,
    ContratoCadastrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

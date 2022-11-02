import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContratoCadastrarComponent } from './page/contrato/contrato-cadastrar/contrato-cadastrar.component';
import { ContratoComponent } from './page/contrato/contrato.component';

@NgModule({
  declarations: [
    AppComponent,
    ContratoComponent,
    ContratoCadastrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

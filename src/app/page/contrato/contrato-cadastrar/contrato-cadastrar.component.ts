import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contrato-cadastrar',
  templateUrl: './contrato-cadastrar.component.html',
  styleUrls: ['./contrato-cadastrar.component.css']
})
export class ContratoCadastrarComponent implements OnInit {

  public isApresentarMensagemSucesso: boolean = false;

  public isApresentarMensagemErro: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  public saveOne() {
    this.isApresentarMensagemSucesso = true;
    setTimeout(() => {
      this.isApresentarMensagemSucesso = false;
    }, 4000);
  }

  public cancelar() {
    this.isApresentarMensagemErro = true;
    setTimeout(() => {
      this.isApresentarMensagemErro = false;
    }, 4000);
  }

}

import { ContratoService } from './../../../service/contrato.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contrato-cadastrar',
  templateUrl: './contrato-cadastrar.component.html',
  styleUrls: ['./contrato-cadastrar.component.css']
})
export class ContratoCadastrarComponent implements OnInit {

  constructor(
    private contratoService: ContratoService
  ) { }

  ngOnInit(): void { 
    this.recuperarPessoaJuridica();
  }

  public recuperarPessoaJuridica() {
    this.contratoService.recuperarPessoaJuridica().subscribe(response => {
      console.log(response);
    });
  }

}

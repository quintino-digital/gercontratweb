import { Component, OnInit } from '@angular/core';
import { ContratoService } from './../../../service/contrato.service';

@Component({
  selector: 'app-contrato-cadastrar',
  templateUrl: './contrato-cadastrar.component.html',
  styleUrls: ['./contrato-cadastrar.component.css']
})
export class ContratoCadastrarComponent implements OnInit {

  public pessoaList: any = [];

  public tipoContratoList: any = [];

  public tipoPeriodoFinanceiroList: any = [];

  constructor(
    private contratoService: ContratoService
  ) { }

  ngOnInit(): void {
    this.recuperarPessoaInstituicaoFinanceira();
    this.recuperarTipoContrato();
    this.recuperarTipoPeriodoFinanceiro();
  }

  public recuperarPessoaInstituicaoFinanceira() {
    this.contratoService.recuperarPessoaInstituicaoFinanceira().subscribe(response => {
      this.pessoaList = response;
    });
  }

  public recuperarTipoContrato() {
    this.contratoService.recuperarTipoContrato().subscribe(response => {
      this.tipoContratoList = response;
    });
  }

  public recuperarTipoPeriodoFinanceiro() {
    this.contratoService.recuperarTipoPeriodoFinanceiro().subscribe(response => {
      this.tipoPeriodoFinanceiroList = response;
    });
  }

}

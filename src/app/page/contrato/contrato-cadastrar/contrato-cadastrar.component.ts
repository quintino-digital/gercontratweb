import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContratoService } from './../../../service/contrato.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-contrato-cadastrar',
  templateUrl: './contrato-cadastrar.component.html',
  styleUrls: ['./contrato-cadastrar.component.css']
})
export class ContratoCadastrarComponent implements OnInit {

  public isApresentarMensagemSucesso: boolean = false;

  public pessoaList: any = [];

  public tipoContratoList: any = [];

  public tipoPeriodoFinanceiroList: any = [];

  formBuilderGroup = this.formBuilder.group({
    codigo: [{ value: "", disable: true }],
    codigoInstituicaoFinanceira: ["", Validators.required ],
    codigoTipoContratoModel: ["", Validators.required ],
    codigoTipoPeriodoModel: ["", Validators.required ],
    dataInicio: ["", Validators.required ],
    valorEfetivo: ["", Validators.required ],
    valorParcela: ["", Validators.required ],
    diaVencimento: ["", Validators.required ],
    quantidadeParcela: ["", Validators.required ],
  });

  constructor(
    private contratoService: ContratoService,
    private formBuilder: FormBuilder,
    private router: Router
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

  public saveOne() {
    const contratoRequestDTO = {
      codigoInstituicaoFinanceira: this.formBuilderGroup.controls["codigoInstituicaoFinanceira"].value,
      codigoTipoContratoModel: this.formBuilderGroup.controls["codigoTipoContratoModel"].value,
      codigoTipoPeriodoModel: this.formBuilderGroup.controls["codigoTipoPeriodoModel"].value,
      dataInicio: this.formBuilderGroup.controls["dataInicio"].value,
      valorEfetivo: this.formBuilderGroup.controls["valorEfetivo"].value,
      valorParcela: this.formBuilderGroup.controls["valorParcela"].value,
      diaVencimento: this.formBuilderGroup.controls["diaVencimento"].value,
      quantidadeParcela: this.formBuilderGroup.controls["quantidadeParcela"].value
    };
    this.contratoService.cadastrarContrato(contratoRequestDTO).subscribe(response => {
      this.limparFormulario();
      this.apresentarMensagemSucesso();
    });
  }

  public apresentarMensagemSucesso() {
    this.isApresentarMensagemSucesso = true;
    setTimeout(() => {
      this.isApresentarMensagemSucesso = false;
    }, 5000);
  }

  public redirecionarTelaMonitoramento() {
    return this.router.navigateByUrl("/monitoramento");
  }

  public limparFormulario() {
    this.formBuilderGroup.reset();
  }

}

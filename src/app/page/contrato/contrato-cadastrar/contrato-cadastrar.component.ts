import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContratoService } from './../../../service/contrato.service';

@Component({
  selector: 'app-contrato-cadastrar',
  templateUrl: './contrato-cadastrar.component.html',
  styleUrls: ['./contrato-cadastrar.component.css']
})
export class ContratoCadastrarComponent implements OnInit {

  public pessoaJuridicaList: any[] = [];

  public pessoaTipoContratoList: any[] = [];

  public pessoaTipoPeriodoFinanceiroList: any[] = [];

  public isApresentarMensagemSucesso: boolean = false;

  public isApresentarMensagemErro: boolean = false;

  constructor(
    private contratoService: ContratoService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.recuperarPessoaJuridica();
    this.recuperarTipoContrato();
    this.recuperarTipoPeriodoFinanceiro();
  }

  public formBuilderGroup = this.formBuilder.group({
    codigo: [{ value: "", disable: true }],
    codigoInstituicaoFinanceira: ["", Validators.required ],
    codigoTipoContrato: ["", Validators.required ],
    codigoTipoPeriodo: ["", Validators.required ],
    dataInicio: ["", Validators.required ],
    valorEfetivo: ["", Validators.required ],
    valorParcela: ["", Validators.required ],
    diaVencimento: ["", Validators.required ],
    quantidadeParcela: ["", Validators.required ],
  });

  public recuperarPessoaJuridica() {
    return this.contratoService.recuperarPessoaJuridica().subscribe( response => {
      this.pessoaJuridicaList = response;
    });
  }

  public recuperarTipoContrato() {
    return this.contratoService.recuperarTipoContrato().subscribe( response => {
      this.pessoaTipoContratoList = response;
    });
  }

  public recuperarTipoPeriodoFinanceiro() {
    return this.contratoService.recuperarTipoPeriodoFinanceiro().subscribe( response => {
      this.pessoaTipoPeriodoFinanceiroList = response;
    });
  }

  public saveOne() {
    console.log(this.formBuilderGroup.value);
    const contratoRequestDTO = {
      codigoInstituicaoFinanceira: this.formBuilderGroup.controls["codigoInstituicaoFinanceira"].value,
      codigoTipoContratoModel: this.formBuilderGroup.controls["codigoTipoContrato"].value,
      codigoTipoPeriodoModel: this.formBuilderGroup.controls["codigoTipoPeriodo"].value,
      dataInicio: this.formBuilderGroup.controls["dataInicio"].value,
      valorEfetivo: this.formBuilderGroup.controls["valorEfetivo"].value,
      valorParcela: this.formBuilderGroup.controls["valorParcela"].value,
      diaVencimento: this.formBuilderGroup.controls["diaVencimento"].value,
      quantidadeParcela: this.formBuilderGroup.controls["quantidadeParcela"].value
    };
    this.contratoService.cadastrarContratoFinanceiro(contratoRequestDTO).subscribe( response => {
      this.isApresentarMensagemSucesso = true;
      this.limparCamposFormulario();
      setTimeout(() => {
        this.isApresentarMensagemSucesso = false;
        this.redirecionarPaginaGerenciadorContrato();
      }, 4000);
    });
  }

  public cancelar() {
    this.isApresentarMensagemErro = true;
    setTimeout(() => {
      this.isApresentarMensagemErro = false;
    }, 4000);
  }

  public redirecionarPaginaGerenciadorContrato() {
    this.router.navigateByUrl("/contrato");
  }

  public limparCamposFormulario() {
    this.formBuilderGroup.reset();
  }

}

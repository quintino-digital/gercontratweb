import { Component, OnInit } from '@angular/core';
import { ContratoService } from './../../service/contrato.service';
import { PessoaService } from './../../service/pessoa.service';

@Component({
  selector: 'app-contrato',
  templateUrl: './contrato.component.html',
  styleUrls: ['./contrato.component.css']
})
export class ContratoComponent implements OnInit {

  public contratoFinanceiroList: any[] = [];

  public pessoaDTO: any;

  constructor(
    private contratoService: ContratoService,
    private pessoaService: PessoaService
  ) { }

  ngOnInit(): void {
    this.findAll();
  }

  public findAll() {
    return this.contratoService.findAll().subscribe( response => {
      this.contratoFinanceiroList = response;
      console.log(response);
    });
  }


}

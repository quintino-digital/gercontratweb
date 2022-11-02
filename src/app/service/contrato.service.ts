import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ContratoRequestDTO } from '../dto/contrato-request.dto';

@Injectable({
  providedIn: 'root'
})
export class ContratoService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public recuperarPessoaInstituicaoFinanceira() : Observable<any[]> {
    return this.httpClient.get<any[]>(environment.endpoint_pessoa);
  }

  public recuperarTipoContrato() : Observable<any[]> {
    return this.httpClient.get<any[]>(environment.endpoint_tipo_contrato);
  }

  public recuperarTipoPeriodoFinanceiro() : Observable<any[]> {
    return this.httpClient.get<any[]>(environment.endpoint_tipo_periodo_financeiro);
  }

  public cadastrarContrato(contratoRequestDTO: ContratoRequestDTO) : Observable<ContratoRequestDTO> {
    return this.httpClient.post<ContratoRequestDTO>(environment.endpoint_contrato, contratoRequestDTO);
  }

}

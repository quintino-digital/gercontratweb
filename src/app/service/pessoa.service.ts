import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public findOne(codigo: number) : Observable<any> {
    return this.httpClient.get<any>(environment.endpoint_pessoa.concat(`/${codigo}`));
  }

}

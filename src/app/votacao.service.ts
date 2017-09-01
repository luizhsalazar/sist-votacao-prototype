import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class VotacaoService {

  conselheirosChange: EventEmitter<any> = new EventEmitter();
  showResult: EventEmitter<any> = new EventEmitter();
  dbUpdate: EventEmitter<any> = new EventEmitter();
  cleanData: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) { }

  getConselheiros() {    
    return this.http.get('http://localhost:9090/ca/sistvotacao/painel/api.php?method=todos_conselheiros');
  }

  getPautaAtiva() {
    return this.http.get('http://localhost:9090/ca/sistvotacao/painel/api.php?method=pauta_ativa');
  }

  getStatusVotacao() {
    return this.http.get('http://localhost:9090/ca/sistvotacao/painel/api.php?method=status_votacao_atual');
  }

  getItemVotacao() {
    return this.http.get('http://localhost:9090/ca/sistvotacao/painel/api.php?method=item_votacao');
  }

  finalizaVotacao() {
    return this.http.get('http://localhost:9090/ca/sistvotacao/painel/api.php?method=finaliza_votacao');
  }

  emitConselheirosChangeEvent() {
    this.conselheirosChange.emit();
  }

  getConselheirosChangeEmitter() {
    return this.conselheirosChange;
  }

  emitResultChangeEvent() {
    this.showResult.emit();
  }

  getResultChangeEmitter() {
    return this.showResult;
  }

  emitDbChangeEvent() {
    this.dbUpdate.emit();
  }

  getDbChangeEmitter() {
    return this.dbUpdate;
  }  

  emitCleanDataEvent() {
    this.cleanData.emit();
  }

  getCleanDataEmitter() {
    return this.cleanData;
  }  
}

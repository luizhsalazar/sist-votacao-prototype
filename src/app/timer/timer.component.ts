import { Component, OnInit } from '@angular/core';
import { SimpleTimer } from 'ng2-simple-timer';
import { VotacaoService } from "app/votacao.service";
import { ConselheirosBoardComponent } from "app/conselheiros-board/conselheiros-board.component";
import { WidgetStatusVotacaoComponent } from "app/widget-status-votacao/widget-status-votacao.component";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  counterVotacao = 0;
  timerIdVotacao: string;
  timerIdDbUpdate: string;

  subscription: any;
  statusVotacao: any;

  constructor(private st: SimpleTimer, private service: VotacaoService) { 
    // Control updates in database
    this.st.newTimer('5sec', 5);
    this.subscribeTimerDbUpdate();
  }

  ngOnInit() {
    this.subscription = this.service.getDbChangeEmitter()
      .subscribe(() => this.checkVotacao());
  }

  checkVotacao() {
    this.service.getItemVotacao()
      .subscribe( response => {
        this.statusVotacao = response;

        if (this.statusVotacao.id_status_item_a_ser_votado == 3 && this.counterVotacao === 0 && this.timerIdVotacao == undefined) {
          this.initTimerVotacao();
        } else {
          if (this.statusVotacao.id_status_item_a_ser_votado != 3) {
            this.st.unsubscribe(this.timerIdVotacao);
            this.timerIdVotacao = undefined;
            this.counterVotacao = 0;
          }
        }
      }, error => {
        console.log('error getting item votacao: ' + error);
    });    
  }

  initTimerVotacao() {
    this.st.newTimer('1sec', 1);
    this.subscribeTimer();
  }

  subscribeTimerDbUpdate() {
		if (this.timerIdDbUpdate) {			
			this.st.unsubscribe(this.timerIdDbUpdate);
      this.timerIdDbUpdate = undefined;
		} else {
			this.timerIdDbUpdate = this.st.subscribe('5sec', () => this.timerDbUpdate());
		}
  }

  timerDbUpdate() {
    this.service.emitDbChangeEvent();
  }

  subscribeTimer() {
		if (this.timerIdVotacao) {			
			this.st.unsubscribe(this.timerIdVotacao);
			this.timerIdVotacao = undefined;
		} else {
			this.timerIdVotacao = this.st.subscribe('1sec', () => this.timerVotacao());
		}
  }
  
  timerVotacao() {
    this.counterVotacao++;

    if (this.counterVotacao % 3 == 0) {
      this.service.emitConselheirosChangeEvent();
    }

    if (this.counterVotacao == 40) {
      this.service.emitResultChangeEvent();
      this.st.unsubscribe(this.timerIdVotacao);
      this.statusVotacao.id_status_item_a_ser_votado = 4;
      this.counterVotacao = 0;
    }
  }
  
}

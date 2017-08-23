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

  counter = 0;
  timerId: string;

  constructor(private st: SimpleTimer, private service: VotacaoService) { }

  ngOnInit() {
    this.st.newTimer('1sec', 1);
    this.subscribeTimer();
  }

  subscribeTimer() {
		if (this.timerId) {			
			this.st.unsubscribe(this.timerId);
			this.timerId = undefined;
		} else {
			this.timerId = this.st.subscribe('1sec', () => this.timercallback());
		}
}
  
  timercallback() {
    this.counter++;
    this.service.emitConselheirosChangeEvent(true);
  }  
}

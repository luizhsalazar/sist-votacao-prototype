import { Component, OnInit } from '@angular/core';
import { VotacaoService } from "app/votacao.service";

@Component({
  selector: 'app-widget-status-votacao',
  templateUrl: './widget-status-votacao.component.html',
  styleUrls: ['./widget-status-votacao.component.scss']
})
export class WidgetStatusVotacaoComponent implements OnInit {

  statusVotacao: any = [];
  subscription: any;
  subscriptionVotacao: any;

  constructor(private service: VotacaoService) { 
    this.getVotacao();
  }

  ngOnInit() {
    this.subscription = this.service.getConselheirosChangeEmitter().subscribe(() => this.getVotacao());
    this.subscriptionVotacao = this.service.getCleanDataEmitter()
      .subscribe(() => this.cleanPainel());  
  }

  cleanPainel() {
    this.getVotacao();
  }

  getVotacao() {
    this.service.getStatusVotacao()
      .subscribe(response => {
        this.statusVotacao = response;
      }, error => {
        console.log('error getting status votacao: ' + error);
      });
  }
}

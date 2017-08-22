import { Component, OnInit } from '@angular/core';
import { VotacaoService } from "app/votacao.service";

@Component({
  selector: 'app-widget-status-votacao',
  templateUrl: './widget-status-votacao.component.html',
  styleUrls: ['./widget-status-votacao.component.scss']
})
export class WidgetStatusVotacaoComponent implements OnInit {

  statusVotacao: any;
  
  constructor(private service: VotacaoService) { 
    this.statusVotacao = this.service.getStatusVotacao()
      .subscribe(response => {
        this.statusVotacao = response;
        console.log(this.statusVotacao);
      }, error => {
        console.log('error getting conselheiros: ' + error);
      });
  }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { VotacaoService } from '../votacao.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-conselheiros-board',
  templateUrl: './conselheiros-board.component.html',
  styleUrls: ['./conselheiros-board.component.scss']
})
export class ConselheirosBoardComponent implements OnInit {

  conselheiros: any[] = [];
  subscription: any;
  subscriptionVotacao: any;

  statusVotacao: any;
  cleanVotacao: number = 0;

  constructor(private service: VotacaoService) { 
    this.getConselheiros();
  }

  ngOnInit() {
    this.subscription = this.service.getConselheirosChangeEmitter()
      .subscribe(() => this.getConselheiros());
                        
    this.subscriptionVotacao = this.service.getCleanDataEmitter()
      .subscribe(() => this.cleanPainel());
  }

  getConselheiros() {
    this.service.getConselheiros()
      .subscribe(response => {
        this.conselheiros = this.groupedArray(response, 15);
      }, error => {
        console.log('error getting conselheiros: ' + error);
    });
  }

  cleanPainel() {
    this.getConselheiros();
  }

  groupedArray(arr, chunkSize) {
    var groups = [], i;
    for (i = 0; i < arr.conselheiros.length; i += chunkSize) {
        groups.push(arr.conselheiros.slice(i, i + chunkSize));
    }

    return groups;
  }
}

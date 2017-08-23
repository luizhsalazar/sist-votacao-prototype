import { Component, OnInit, Input } from '@angular/core';
import { VotacaoService } from '../votacao.service';

@Component({
  selector: 'app-conselheiros-board',
  templateUrl: './conselheiros-board.component.html',
  styleUrls: ['./conselheiros-board.component.scss']
})
export class ConselheirosBoardComponent implements OnInit {

  conselheiros: any[] = [];
  subscription: any;

  constructor(private service: VotacaoService) { 
    this.getConselheiros();
  }

  ngOnInit() {
    this.subscription = this.service.getConselheirosChangeEmitter()
                              .subscribe(() => this.getConselheiros());
  }

  getConselheiros() {
    this.service.getConselheiros()
      .subscribe(response => {
        this.conselheiros = this.groupedArray(response, 15);
      }, error => {
        // console.log('error getting conselheiros: ' + error);
    });
  }

  groupedArray(arr, chunkSize) {
    var groups = [], i;
    for (i = 0; i < arr.conselheiros.length; i += chunkSize) {
        groups.push(arr.conselheiros.slice(i, i + chunkSize));
    }

    return groups;
  }


}

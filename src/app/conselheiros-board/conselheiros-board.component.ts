import { Component, OnInit } from '@angular/core';
import { VotacaoService } from '../votacao.service';

@Component({
  selector: 'app-conselheiros-board',
  templateUrl: './conselheiros-board.component.html',
  styleUrls: ['./conselheiros-board.component.scss']
})
export class ConselheirosBoardComponent implements OnInit {

  conselheiros: any;

  constructor(private service: VotacaoService) { 
    this.conselheiros = this.service.getConselheiros()
      .subscribe(response => {
        this.conselheiros = this.groupedArray(response, 15);
        console.log(this.conselheiros);
      }, error => {
        console.log('error getting conselheiros: ' + error);
      });
  }

  ngOnInit() {
  }

  groupedArray(arr, chunkSize) {
    var groups = [], i;
    for (i = 0; i < arr.conselheiros.length; i += chunkSize) {
        groups.push(arr.conselheiros.slice(i, i + chunkSize));
    }

    return groups;
  }

}

import { Component, OnInit } from '@angular/core';
import { VotacaoService } from "app/votacao.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  itemVotacao: any = 'teste';

  constructor(private service: VotacaoService) { 
    this.service.getItemVotacao()
    .subscribe(response => {
      this.itemVotacao = response;
    }, error => {
      console.log('error getting item votacao: ' + error);
  });
  }

  ngOnInit() {
  }

}

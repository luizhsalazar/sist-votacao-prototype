import { Component, OnInit } from '@angular/core';
import { VotacaoService } from "app/votacao.service";

@Component({
  selector: 'app-pauta-description',
  templateUrl: './pauta-description.component.html',
  styleUrls: ['./pauta-description.component.scss']
})
export class PautaDescriptionComponent implements OnInit {

  itemVotacao: any = '';
  
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

import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { VotacaoService } from "app/votacao.service";

@Component({
  selector: 'app-modal-result',
  templateUrl: './modal-result.component.html',
  styleUrls: ['./modal-result.component.scss']
})
export class ModalResultComponent {

  votacaoFinalizada: any = [];

  constructor(public activeModal: NgbActiveModal, private service: VotacaoService) { 
    this.votacaoFinalizada = '';
  }

  ngOnInit() {
    this.service.finalizaVotacao()
      .subscribe(response => {
        this.votacaoFinalizada = response;
      }, error => {
        console.log('error getting status votacao finalizada: ' + error);
      });
  }
}

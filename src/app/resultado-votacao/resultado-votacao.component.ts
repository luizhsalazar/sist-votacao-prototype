import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { VotacaoService } from "app/votacao.service";
import { ModalResultComponent } from '../modal-result/modal-result.component';

@Component({
  selector: 'app-resultado-votacao',
  templateUrl: './resultado-votacao.component.html',
  styleUrls: ['./resultado-votacao.component.scss']
})
export class ResultadoVotacaoComponent implements OnInit {

  subscription: any;
  @Input() modalResult: ModalResultComponent;
    
  constructor(private modalService: NgbModal, private service: VotacaoService) {}

  ngOnInit() {
    this.subscription = this.service.getResultChangeEmitter()
      .subscribe(() => this.open(ModalResultComponent));
  }

  open(content) {
    this.modalService.open(content);
  }
}

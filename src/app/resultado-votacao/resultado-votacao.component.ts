import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { VotacaoService } from "app/votacao.service";

@Component({
  selector: 'app-resultado-votacao',
  templateUrl: './resultado-votacao.component.html',
  styleUrls: ['./resultado-votacao.component.scss']
})
export class ResultadoVotacaoComponent implements OnInit {

  subscription: any;
  
  constructor(private modalService: NgbModal, private service: VotacaoService) {}

  ngOnInit() {
    this.subscription = this.service.getResultChangeEmitter()
      .subscribe(() => this.open(''));
  }

  open(content) {
    this.modalService.open('');
  }
}

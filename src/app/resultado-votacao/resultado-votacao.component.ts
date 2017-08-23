import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { VotacaoService } from "app/votacao.service";

@Component({
  selector: 'app-resultado-votacao',
  templateUrl: './resultado-votacao.component.html',
  styleUrls: ['./resultado-votacao.component.scss']
})
export class ResultadoVotacaoComponent implements OnInit {

  closeResult: string;

  subscription: any;
  
  constructor(private modalService: NgbModal, private service: VotacaoService) {}

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    });
  }

  ngOnInit() {
    this.subscription = this.service.getResultChangeEmitter()
    .subscribe(() => this.open(''));
  }

}

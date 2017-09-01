import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { VotacaoService } from "app/votacao.service";
import { ModalResultComponent } from '../modal-result/modal-result.component';

@Component({
  selector: 'app-resultado-votacao',
  templateUrl: './resultado-votacao.component.html',
  styleUrls: ['./resultado-votacao.component.scss']
})
export class ResultadoVotacaoComponent implements OnInit {

  subscription: any;
  statusVotacao: any;
  @Input() modalResult: ModalResultComponent;
  modalRef: NgbModalRef;

  options: NgbModalOptions = {
    size: 'lg',
    backdrop: 'static',
    keyboard: false
  };
    
  constructor(private modalService: NgbModal, private service: VotacaoService) {
    this.subscription = this.service.getDbChangeEmitter()
      .subscribe(() => this.checkVotacao());
  }

  ngOnInit() {
    this.subscription = this.service.getResultChangeEmitter()
      .subscribe(() => 
        this.open(ModalResultComponent)
      );
  }

  open(content) {
    this.modalRef = this.modalService.open(content, this.options);
  }

  checkVotacao() {
    this.service.getItemVotacao()
      .subscribe(response => {
        this.statusVotacao = response;
        if (this.statusVotacao.id_status_item_a_ser_votado == 3 || this.statusVotacao.id_status_item_a_ser_votado == 2) {
          if (this.modalRef) {
            this.modalRef.close();
            this.service.emitCleanDataEvent();
          }          
        }
      }, error => {
        console.log('error getting item votacao resultado component: ' + error);
    });
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
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

  options: NgbModalOptions = {
    size: 'lg',
    backdrop: 'static',
    keyboard: false
  };
    
  constructor(private modalService: NgbModal, private service: VotacaoService) {}

  ngOnInit() {
    console.log('init resultado votacao component');
    
    this.subscription = this.service.getResultChangeEmitter()
      .subscribe(() => 
        this.open(ModalResultComponent)
      );
  }

  open(content) {
    this.modalService.open(content, this.options);
  }
}

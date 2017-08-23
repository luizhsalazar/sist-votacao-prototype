import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoVotacaoComponent } from './resultado-votacao.component';

describe('ResultadoVotacaoComponent', () => {
  let component: ResultadoVotacaoComponent;
  let fixture: ComponentFixture<ResultadoVotacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadoVotacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoVotacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

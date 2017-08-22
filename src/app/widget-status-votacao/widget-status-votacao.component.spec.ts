import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetStatusVotacaoComponent } from './widget-status-votacao.component';

describe('WidgetStatusVotacaoComponent', () => {
  let component: WidgetStatusVotacaoComponent;
  let fixture: ComponentFixture<WidgetStatusVotacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetStatusVotacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetStatusVotacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConselheirosBoardComponent } from './conselheiros-board.component';

describe('ConselheirosBoardComponent', () => {
  let component: ConselheirosBoardComponent;
  let fixture: ComponentFixture<ConselheirosBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConselheirosBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConselheirosBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

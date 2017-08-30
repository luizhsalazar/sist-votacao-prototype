import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PautaDescriptionComponent } from './pauta-description.component';

describe('PautaDescriptionComponent', () => {
  let component: PautaDescriptionComponent;
  let fixture: ComponentFixture<PautaDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PautaDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PautaDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

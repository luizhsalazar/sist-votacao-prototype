import { TestBed, inject } from '@angular/core/testing';

import { VotacaoService } from './votacao.service';

describe('VotacaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VotacaoService]
    });
  });

  it('should be created', inject([VotacaoService], (service: VotacaoService) => {
    expect(service).toBeTruthy();
  }));
});

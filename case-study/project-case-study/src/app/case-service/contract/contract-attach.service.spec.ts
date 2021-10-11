import { TestBed } from '@angular/core/testing';

import { ContractAttachService } from './contract-attach.service';

describe('ContractAttachService', () => {
  let service: ContractAttachService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContractAttachService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

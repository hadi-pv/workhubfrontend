import { TestBed } from '@angular/core/testing';

import { ModalDataServiceService } from './modal-data-service.service';

describe('ModalDataServiceService', () => {
  let service: ModalDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

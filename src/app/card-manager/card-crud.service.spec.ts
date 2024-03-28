import { TestBed } from '@angular/core/testing';

import { CardCrudService } from './card-crud.service';

describe('CardCrudService', () => {
  let service: CardCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { PassportServices } from './passport.services';

describe('PassportServices', () => {
  let service: PassportServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassportServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

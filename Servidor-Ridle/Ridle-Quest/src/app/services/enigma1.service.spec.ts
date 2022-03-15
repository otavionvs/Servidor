import { TestBed } from '@angular/core/testing';

import { Enigma1Service } from './enigma1.service';

describe('Enigma1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Enigma1Service = TestBed.get(Enigma1Service);
    expect(service).toBeTruthy();
  });
});

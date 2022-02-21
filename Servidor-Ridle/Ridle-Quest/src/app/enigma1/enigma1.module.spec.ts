import { Enigma1Module } from './enigma1.module';

describe('Enigma1Module', () => {
  let enigma1Module: Enigma1Module;

  beforeEach(() => {
    enigma1Module = new Enigma1Module();
  });

  it('should create an instance', () => {
    expect(enigma1Module).toBeTruthy();
  });
});

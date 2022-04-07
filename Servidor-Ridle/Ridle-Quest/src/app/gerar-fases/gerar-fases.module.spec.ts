import { GerarFasesModule } from './gerar-fases.module';

describe('GerarFasesModule', () => {
  let gerarFasesModule: GerarFasesModule;

  beforeEach(() => {
    gerarFasesModule = new GerarFasesModule();
  });

  it('should create an instance', () => {
    expect(gerarFasesModule).toBeTruthy();
  });
});

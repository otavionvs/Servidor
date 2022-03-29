import { VisualFasesModule } from './visual-fases.module';

describe('VisualFasesModule', () => {
  let visualFasesModule: VisualFasesModule;

  beforeEach(() => {
    visualFasesModule = new VisualFasesModule();
  });

  it('should create an instance', () => {
    expect(visualFasesModule).toBeTruthy();
  });
});

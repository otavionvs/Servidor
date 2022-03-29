import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerFasesComponent } from './ver-fases.component';

describe('VerFasesComponent', () => {
  let component: VerFasesComponent;
  let fixture: ComponentFixture<VerFasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerFasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerFasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ocorrencia1ProgramadaComponent } from './ocorrencia1-programada.component';

describe('Ocorrencia1ProgramadaComponent', () => {
  let component: Ocorrencia1ProgramadaComponent;
  let fixture: ComponentFixture<Ocorrencia1ProgramadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ocorrencia1ProgramadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ocorrencia1ProgramadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

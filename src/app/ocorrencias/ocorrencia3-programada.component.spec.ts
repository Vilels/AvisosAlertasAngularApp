import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ocorrencia3ProgramadaComponent } from './ocorrencia3-programada.component';

describe('Ocorrencia3ProgramadaComponent', () => {
  let component: Ocorrencia3ProgramadaComponent;
  let fixture: ComponentFixture<Ocorrencia3ProgramadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ocorrencia3ProgramadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ocorrencia3ProgramadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ocorrencia1NaoProgramadaComponent } from './ocorrencia1-nao-programada.component';

describe('Ocorrencia1NaoProgramadaComponent', () => {
  let component: Ocorrencia1NaoProgramadaComponent;
  let fixture: ComponentFixture<Ocorrencia1NaoProgramadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ocorrencia1NaoProgramadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ocorrencia1NaoProgramadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

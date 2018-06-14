import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ocorrencia3NaoProgramadaComponent } from './ocorrencia3-nao-programada.component';

describe('Ocorrencia3NaoProgramadaComponent', () => {
  let component: Ocorrencia3NaoProgramadaComponent;
  let fixture: ComponentFixture<Ocorrencia3NaoProgramadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ocorrencia3NaoProgramadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ocorrencia3NaoProgramadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ocorrencia5NaoProgramadaComponent } from './ocorrencia5-nao-programada.component';

describe('Ocorrencia5NaoProgramadaComponent', () => {
  let component: Ocorrencia5NaoProgramadaComponent;
  let fixture: ComponentFixture<Ocorrencia5NaoProgramadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ocorrencia5NaoProgramadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ocorrencia5NaoProgramadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

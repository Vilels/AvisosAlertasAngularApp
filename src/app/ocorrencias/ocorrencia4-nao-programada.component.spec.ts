import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ocorrencia4NaoProgramadaComponent } from './ocorrencia4-nao-programada.component';

describe('Ocorrencia4NaoProgramadaComponent', () => {
  let component: Ocorrencia4NaoProgramadaComponent;
  let fixture: ComponentFixture<Ocorrencia4NaoProgramadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ocorrencia4NaoProgramadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ocorrencia4NaoProgramadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

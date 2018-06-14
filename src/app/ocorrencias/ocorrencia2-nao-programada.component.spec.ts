import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ocorrencia2NaoProgramadaComponent } from './ocorrencia2-nao-programada.component';

describe('Ocorrencia2NaoProgramadaComponent', () => {
  let component: Ocorrencia2NaoProgramadaComponent;
  let fixture: ComponentFixture<Ocorrencia2NaoProgramadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ocorrencia2NaoProgramadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ocorrencia2NaoProgramadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

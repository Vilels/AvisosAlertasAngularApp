import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ocorrencia2ProgramadaComponent } from './ocorrencia2-programada.component';

describe('Ocorrencia2ProgramadaComponent', () => {
  let component: Ocorrencia2ProgramadaComponent;
  let fixture: ComponentFixture<Ocorrencia2ProgramadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ocorrencia2ProgramadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ocorrencia2ProgramadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

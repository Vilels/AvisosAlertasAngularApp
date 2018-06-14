import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipologiaNaoProgramadaComponent } from './tipologia-nao-programada.component';

describe('TipologiaNaoProgramadaComponent', () => {
  let component: TipologiaNaoProgramadaComponent;
  let fixture: ComponentFixture<TipologiaNaoProgramadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipologiaNaoProgramadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipologiaNaoProgramadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

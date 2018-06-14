import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipologiaProgramadaComponent } from './tipologia-programada.component';

describe('TipologiaProgramadaComponent', () => {
  let component: TipologiaProgramadaComponent;
  let fixture: ComponentFixture<TipologiaProgramadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipologiaProgramadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipologiaProgramadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

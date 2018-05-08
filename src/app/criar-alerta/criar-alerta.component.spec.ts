import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarAlertaComponent } from './criar-alerta.component';

describe('CriarAlertaComponent', () => {
  let component: CriarAlertaComponent;
  let fixture: ComponentFixture<CriarAlertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarAlertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarAlertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

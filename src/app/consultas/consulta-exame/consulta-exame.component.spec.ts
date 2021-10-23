import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaExameComponent } from './consulta-exame.component';

describe('ConsultaExameComponent', () => {
  let component: ConsultaExameComponent;
  let fixture: ComponentFixture<ConsultaExameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaExameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaExameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

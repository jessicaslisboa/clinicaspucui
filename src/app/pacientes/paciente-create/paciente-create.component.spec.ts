import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteCreateComponent } from './paciente-create.component';

describe('PacienteFormComponent', () => {
  let component: PacienteCreateComponent;
  let fixture: ComponentFixture<PacienteCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacienteCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

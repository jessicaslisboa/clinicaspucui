import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExameSolicitarComponent } from './exame-solicitar.component';

describe('ExameSolicitarComponent', () => {
  let component: ExameSolicitarComponent;
  let fixture: ComponentFixture<ExameSolicitarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExameSolicitarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExameSolicitarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitaCreateComponent } from './receita-create.component';

describe('ReceitaCreateComponent', () => {
  let component: ReceitaCreateComponent;
  let fixture: ComponentFixture<ReceitaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceitaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceitaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

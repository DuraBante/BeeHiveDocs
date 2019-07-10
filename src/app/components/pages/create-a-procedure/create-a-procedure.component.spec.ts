import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAProcedureComponent } from './create-a-procedure.component';

describe('CreateAProcedureComponent', () => {
  let component: CreateAProcedureComponent;
  let fixture: ComponentFixture<CreateAProcedureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAProcedureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAProcedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

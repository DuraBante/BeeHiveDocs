import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovalAnIncorrectlyInitiatedProcedureComponent } from './removal-an-incorrectly-initiated-procedure.component';

describe('RemovalAnIncorrectlyInitiatedProcedureComponent', () => {
  let component: RemovalAnIncorrectlyInitiatedProcedureComponent;
  let fixture: ComponentFixture<RemovalAnIncorrectlyInitiatedProcedureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemovalAnIncorrectlyInitiatedProcedureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovalAnIncorrectlyInitiatedProcedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

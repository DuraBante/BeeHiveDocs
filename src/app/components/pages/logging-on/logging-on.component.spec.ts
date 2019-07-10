import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggingOnComponent } from './logging-on.component';

describe('LoggingOnComponent', () => {
  let component: LoggingOnComponent;
  let fixture: ComponentFixture<LoggingOnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggingOnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggingOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

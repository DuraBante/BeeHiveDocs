import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAHiveComponent } from './select-a-hive.component';

describe('SelectAHiveComponent', () => {
  let component: SelectAHiveComponent;
  let fixture: ComponentFixture<SelectAHiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectAHiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectAHiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

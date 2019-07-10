import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTheHiveComponent } from './edit-the-hive.component';

describe('EditTheHiveComponent', () => {
  let component: EditTheHiveComponent;
  let fixture: ComponentFixture<EditTheHiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTheHiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTheHiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingAHiveComponent } from './creating-a-hive.component';

describe('CreatingAHiveComponent', () => {
  let component: CreatingAHiveComponent;
  let fixture: ComponentFixture<CreatingAHiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatingAHiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatingAHiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

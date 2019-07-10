import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAndManageItemsComponent } from './create-and-manage-items.component';

describe('CreateAndManageItemsComponent', () => {
  let component: CreateAndManageItemsComponent;
  let fixture: ComponentFixture<CreateAndManageItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAndManageItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAndManageItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

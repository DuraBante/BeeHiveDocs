import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateATemplateComponent } from './create-a-template.component';

describe('CreateATemplateComponent', () => {
  let component: CreateATemplateComponent;
  let fixture: ComponentFixture<CreateATemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateATemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateATemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

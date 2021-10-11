import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProjectionComponent } from './create-projection.component';

describe('CreateProjectionComponent', () => {
  let component: CreateProjectionComponent;
  let fixture: ComponentFixture<CreateProjectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProjectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

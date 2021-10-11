import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAttachComponent } from './add-attach.component';

describe('AddAttachComponent', () => {
  let component: AddAttachComponent;
  let fixture: ComponentFixture<AddAttachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAttachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAttachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

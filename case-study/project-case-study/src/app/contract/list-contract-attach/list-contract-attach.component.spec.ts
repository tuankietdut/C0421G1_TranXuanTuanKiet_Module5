import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListContractAttachComponent } from './list-contract-attach.component';

describe('ListContractAttachComponent', () => {
  let component: ListContractAttachComponent;
  let fixture: ComponentFixture<ListContractAttachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListContractAttachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListContractAttachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

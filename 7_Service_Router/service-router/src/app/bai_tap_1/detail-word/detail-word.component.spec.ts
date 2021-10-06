import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeailWordComponent } from './detail-word.component';

describe('DeailWordComponent', () => {
  let component: DeailWordComponent;
  let fixture: ComponentFixture<DeailWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeailWordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeailWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPetComponent } from './info-pet.component';

describe('InfoPetComponent', () => {
  let component: InfoPetComponent;
  let fixture: ComponentFixture<InfoPetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoPetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubePlaySongComponent } from './youtube-play-song.component';

describe('YoutubePlaySongComponent', () => {
  let component: YoutubePlaySongComponent;
  let fixture: ComponentFixture<YoutubePlaySongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubePlaySongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubePlaySongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ModelSongService } from './model-song.service';

describe('ModelSongService', () => {
  let service: ModelSongService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModelSongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

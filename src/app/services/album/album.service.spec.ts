import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { AlbumService } from './album.service';

describe('AlbumService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [AlbumService]
    });
  });

  it('should be connected', inject([AlbumService], (service: AlbumService) => {
    expect(service).toBeTruthy(); 
  }));
});
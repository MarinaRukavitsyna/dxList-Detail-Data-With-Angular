import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { PhotoService } from './photo.service';

describe('PhotoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [PhotoService]
    });
  });

  it('should be connected', inject([PhotoService], (service: PhotoService) => {
    expect(service).toBeTruthy();
  }));
});
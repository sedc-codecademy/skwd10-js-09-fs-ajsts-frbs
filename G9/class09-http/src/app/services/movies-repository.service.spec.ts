import { TestBed } from '@angular/core/testing';

import { MoviesRepositoryService } from './movies-repository.service';

describe('MoviesRepositoryService', () => {
  let service: MoviesRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

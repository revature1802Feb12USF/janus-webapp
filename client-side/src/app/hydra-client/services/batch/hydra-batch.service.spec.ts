import { TestBed, inject } from '@angular/core/testing';

import { HydraBatchService } from './hydra-batch.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

fdescribe('BatchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HydraBatchService, HttpClient, HttpHandler]
    });
  });

  it('should be created', inject([HydraBatchService], (service: HydraBatchService) => {
    expect(service).toBeTruthy();
  }));
});

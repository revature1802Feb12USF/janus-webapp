import { TestBed, inject, async } from '@angular/core/testing';

import { TrainerService } from './trainer.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { UrlService } from '../urls/url.service';

fdescribe('TrainerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrainerService, UrlService],
      imports: [HttpClientModule,
        HttpClientTestingModule]
    });
  });

  it('should be created', inject([TrainerService], (service: TrainerService) => {
    expect(service).toBeTruthy();
  }));

  it(`should get all trainers`,
    async(
      inject([HttpClient, HttpTestingController, TrainerService],
        (http: HttpClient, backend: HttpTestingController, service: TrainerService) => {
          service.fetchAll().subscribe();

          backend.expectOne({
            url: `http://localhost:8909/trainers`,
            method: 'GET'
          });
        })
    )
  );
});

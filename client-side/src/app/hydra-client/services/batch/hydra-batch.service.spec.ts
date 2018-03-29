import { TestBed, inject, async } from '@angular/core/testing';

import { HydraBatchService } from './hydra-batch.service';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { HydraBatch } from '../../entities/HydraBatch';
import { UrlService } from '../urls/url.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Batch } from '../../../portals/Caliber/entities/Batch';

fdescribe('HydraBatchService', () => {
  const batch = new HydraBatch();
  batch.batchId = 100;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UrlService, HydraBatchService],
      imports: [HttpClientModule,
        HttpClientTestingModule]
    });
  });

  it('batch should be created', inject([HydraBatchService], (service: HydraBatchService) => {
    expect(service).toBeTruthy();
  }));

  it(`should get all batches`,
    async(
      inject([HttpClient, HttpTestingController, HydraBatchService],
        (http: HttpClient, backend: HttpTestingController, service: HydraBatchService) => {
          service.fetchAll().subscribe();

          backend.expectOne({
            url: `http://localhost:8909/batches`,
            method: 'GET'
          });
        })
    )
  );

  it(`should get all batches by trainer`,
  async(
    inject([HttpClient, HttpTestingController, HydraBatchService],
      (http: HttpClient, backend: HttpTestingController, service: HydraBatchService) => {
        service.fetchAllByTrainer().subscribe();

        backend.expectOne({
          url: `http://localhost:8909/batches/trainers`,
          method: 'GET'
        });
      })
  )
);

  it(`should get all batches by trainer id`,
  async(
    inject([HttpClient, HttpTestingController, HydraBatchService],
      (http: HttpClient, backend: HttpTestingController, service: HydraBatchService) => {
        service.fetchAllByTrainerId(100).subscribe();

        backend.expectOne({
          url: `http://localhost:8909/batches/trainers/100`,
          method: 'GET'
        });
      })
  )
);

  it(`should create a new batch`,
    async(
      inject([HttpClient, HttpTestingController, HydraBatchService],
        (http: HttpClient, backend: HttpTestingController, service: HydraBatchService) => {
          service.create(batch).subscribe();

          backend.expectOne({
            url: `http://localhost:8909/batches`,
            method: 'POST'
          });
        })
    )
  );

  it(`should update a batch`,
    async(
      inject([HttpClient, HttpTestingController, HydraBatchService],
        (http: HttpClient, backend: HttpTestingController, service: HydraBatchService) => {
          service.update(batch).subscribe();

          backend.expectOne({
            url: `http://localhost:8909/batches`,
            method: 'PUT'
          });
        })
    )
  );

  it(`should delete a batch`,
    async(
      inject([HttpClient, HttpTestingController, HydraBatchService],
        (http: HttpClient, backend: HttpTestingController, service: HydraBatchService) => {
          service.delete(batch).subscribe();

          backend.expectOne({
            url: `http://localhost:8909/batches/${batch.batchId}`,
            method: 'DELETE'
          });
        })
    )
  );
});

import { TestBed, inject, async } from '@angular/core/testing';

import { TrainerService } from './trainer.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { UrlService } from '../urls/url.service';
import { HydraTrainer } from '../../entities/HydraTrainer';

fdescribe('TrainerService', () => {
  const trainer: HydraTrainer = new HydraTrainer();
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

  it(`should get trainer by email`,
    async(
      inject([HttpClient, HttpTestingController, TrainerService],
        (http: HttpClient, backend: HttpTestingController, service: TrainerService) => {
          service.fetchByEmail('charles@email.comm').subscribe();

          backend.expectOne({
            url: `http://localhost:8909/trainers/email/charles@email.comm/`,
            method: 'GET'
          });
        })
    )
  );

  it(`should get all trainer titles`,
    async(
      inject([HttpClient, HttpTestingController, TrainerService],
        (http: HttpClient, backend: HttpTestingController, service: TrainerService) => {
          service.fetchTitles().subscribe();

          backend.expectOne({
            url: `http://localhost:8909/trainers/titles`,
            method: 'GET'
          });
        })
    )
  );

  it(`should get all trainer roles`,
    async(
      inject([HttpClient, HttpTestingController, TrainerService],
        (http: HttpClient, backend: HttpTestingController, service: TrainerService) => {
          service.fetchRoles().subscribe();

          backend.expectOne({
            url: `http://localhost:8909/trainers/roles`,
            method: 'GET'
          });
        })
    )
  );

  it(`should create a trainer`,
    async(
      inject([HttpClient, HttpTestingController, TrainerService],
        (http: HttpClient, backend: HttpTestingController, service: TrainerService) => {
          service.create(new HydraTrainer).subscribe();

          backend.expectOne({
            url: `http://localhost:8909/trainers`,
            method: 'POST'
          });
        })
    )
  );

  it(`should update a trainer`,
    async(
      inject([HttpClient, HttpTestingController, TrainerService],
        (http: HttpClient, backend: HttpTestingController, service: TrainerService) => {
          service.update(trainer).subscribe();

          backend.expectOne({
            url: `http://localhost:8909/trainers`,
            method: 'PUT'
          });
        })
    )
  );

});

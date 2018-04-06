import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { HttpModule } from '@angular/http';

import { HydraBatchService } from './services/batch/hydra-batch.service';
import { TrainerService } from './services/trainer/trainer.service';
import { HydraSkillService } from './services/skill/hydra-skill.service';
import { UrlService } from './services/urls/url.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HydraInterceptor } from './interceptors/hydra.interceptor';

@NgModule({
  imports: [
    HttpModule,
  ],
  declarations: [
  ],
  providers: [
    HydraBatchService,
    HydraSkillService,
    TrainerService,
    UrlService,

    { provide: HTTP_INTERCEPTORS, useClass: HydraInterceptor, multi: true },  // interceptor for all HTTP requests
    UrlService
  ]

})
export class HydraClientModule { }

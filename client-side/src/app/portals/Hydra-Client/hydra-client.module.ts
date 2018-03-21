import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UrlService } from './services/url/url.service';
import { TraineeService } from './services/trainee/trainee.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    UrlService,
    TraineeService
  ]
})
export class HydraClientModule { }

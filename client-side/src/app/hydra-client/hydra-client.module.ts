import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HydraCategoryService } from './category/hydra-category.service';
import { HydraBatchService } from './services/batch/hydra-batch.service';

@NgModule({
  imports: [
    HttpModule,
  ],
  declarations: [
  ],
  providers: [
    HydraCategoryService,
    HydraBatchService
  ]
})
export class HydraClientModule { }

import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HydraCategoryService } from './category/hydra-category.service';
import { TrainerService } from './services/trainer/trainer.service';
import { UrlService } from './services/url/url.service';

@NgModule({
  imports: [
    HttpModule,
  ],
  declarations: [
  ],
  providers: [HydraCategoryService, TrainerService, UrlService]
})
export class HydraClientModule { }

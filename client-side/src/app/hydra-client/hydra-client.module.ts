import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HydraCategoryService } from './category/hydra-category.service';

@NgModule({
  imports: [
    HttpModule,
  ],
  declarations: [
  ],
  providers: [HydraCategoryService]
})
export class HydraClientModule { }

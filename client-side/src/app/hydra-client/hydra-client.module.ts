import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HydraSkillService } from './services/skill/hydra-skill.service';
import { UrlService } from './services/urls/url.service';
import { UrlConfig } from './services/urls/UrlConfig';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HydraInterceptor } from './interceptors/hydra.interceptor';


export const URL_CONFIG = new InjectionToken<UrlService>('url.config');

@NgModule({
  imports: [
    HttpModule,
  ],
  declarations: [
  ],
  providers: [
    HydraSkillService,
    { provide: HTTP_INTERCEPTORS, useClass: HydraInterceptor, multi: true },  // interceptor for all HTTP requests
  ]
})
export class HydraClientModule {

  /**
   * Provide the HydraClient with a context url to use
   *
   * @param context
   */
  static forRoot(context: string): ModuleWithProviders {
    return {
      ngModule: HydraClientModule,
      providers: [
        {
          provide: UrlService,
          useValue: new UrlService(context)
        }
      ]
    };
  }

}

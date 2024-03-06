// ANGULAR:
import { ApplicationConfig, enableProdMode, isDevMode, importProvidersFrom } from '@angular/core';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';
import { HttpClient, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';

// IONIC:
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
// APP:
import { environment } from 'environments/environment';
import { routes } from './app.routes';
import { TokenInterceptorService } from './CORE/Auth/Interceptors/token-interceptor.service';

//I18n
import {  HttpClientModule } from "@angular/common/http";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

if (environment.production) { enableProdMode();}

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy,  },
    importProvidersFrom(
      HttpClientModule,
      TranslateModule.forRoot({
        defaultLanguage: 'en',
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      }),
    ),
    provideIonicAngular(),
    provideRouter(routes),
    provideServiceWorker('ngsw-worker.js', { enabled: !isDevMode(), registrationStrategy: 'registerWhenStable:30000' }),
    provideHttpClient(
      withFetch(),
      withInterceptors([TokenInterceptorService])
    ),
    // provideHttpClient(withInterceptors([TokenInterceptorService])),
  ],
};

defineCustomElements(window);

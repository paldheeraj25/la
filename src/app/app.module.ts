import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LinkedInSdkModule } from 'angular-linkedin-sdk';


/*
 * Platform and Environment providers/directives/pipes
 */
import { routing } from './app.routing'
// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';
import { AuthService } from "./providers/auth/auth.service";
import { FileUtil } from "./product/product-form/file.util";
import { ProductDataService } from "./product/providers/product-data.service";
import { JewelDataService } from "./product/providers/jewel-data.service";
import { AdvertisementDataService } from "./advertisement/providers/advertisement-data.service";
import { UserDataService } from './user/provider/user-data.service';
import { APIService } from './shared/api.service';
import { RoleBaseService } from './shared/service/role-base.service';

// Core providers
import { CoreModule } from "./core/core.module";
import { SmartadminLayoutModule } from "./shared/layout/layout.module";
import { AuthGaurd } from './providers/auth/auth.gaurd';

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState,
  AuthService,
  AuthGaurd,
  ProductDataService,
  JewelDataService,
  FileUtil,
  AdvertisementDataService,
  UserDataService,
  APIService,
  RoleBaseService
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    CoreModule,
    SmartadminLayoutModule,
    routing,
    LinkedInSdkModule
  ],
  exports: [
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    // ENV_PROVIDERS,
    APP_PROVIDERS,
    //LinkedIn SDK variables
    { provide: 'apiKey', useValue: '81iy3swyl5bnz4' },
    { provide: 'authorize', useValue: 'true' },
  ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef, public appState: AppState) { }


}


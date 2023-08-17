import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntityDataModule, EntityDataService } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { entityConfig } from './entity-metadata';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { HotToastModule } from '@ngneat/hot-toast';
import { AuthService } from './auth/auth-service/auth.service';
import { UserDataService } from './dashboard/shared/ngrx-store/user/user-data.service';
import { AuthInterceptor } from './services/auth.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
     ReactiveFormsModule,
     BrowserAnimationsModule,
     NgxDaterangepickerMd.forRoot(),
     HotToastModule.forRoot(),
     //// NGRX DATA Store init
     StoreModule.forRoot({}),
     StoreDevtoolsModule.instrument({
         maxAge: 25,
     }),
     EffectsModule.forRoot([]),
     EntityDataModule.forRoot(entityConfig),
  ],
  providers: [
    AuthService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
  entityDataService:EntityDataService,
  UserService:UserDataService,
  ){
    entityDataService.registerServices({'User': UserService})
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntityDataModule, EntityDataService } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { entityConfig } from './entity-metadata';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
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
     //// NGRX DATA Store init
     StoreModule.forRoot({}),
     StoreDevtoolsModule.instrument({
         maxAge: 25,
     }),
     EffectsModule.forRoot([]),
     EntityDataModule.forRoot(entityConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
  entityDataService:EntityDataService,
  ){

  }
}

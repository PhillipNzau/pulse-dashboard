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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
     ReactiveFormsModule,
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

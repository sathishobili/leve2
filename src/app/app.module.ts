import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Other imports removed for brevity
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Other imports removed for brevity
import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

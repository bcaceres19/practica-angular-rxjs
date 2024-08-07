import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentIntervalTimerComponent } from './component-interval-timer/component-interval-timer.component';
import { ComponentObservableComponent } from './component-observable/component-observable.component';
import { ComponentFromEventComponent } from './component-from-event/component-from-event.component';
import { ComponentMapFilterComponent } from './component-map-filter/component-map-filter.component';
import { ComponentTapComponent } from './component-tap/component-tap.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentIntervalTimerComponent,
    ComponentObservableComponent,
    ComponentFromEventComponent,
    ComponentMapFilterComponent,
    ComponentTapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

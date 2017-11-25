import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { SmartadminModule } from '../../shared/smartadmin.module'

import { AnalyticsRoutingModule } from './analytics-routing.module';
import { AnalyticsComponent } from './analytics.component';
import { SocialNetworkComponent } from "./live-feeds/social-network.component";
import { LiveFeedsComponent } from "./live-feeds/live-feeds.component";
import { LiveStatsComponent } from "./live-feeds/live-stats.component";
import { RevenueComponent } from "./live-feeds/revenue.component";
import { BirdEyeComponent } from './bird-eye/bird-eye.component';
import { CalendarModule } from "../../+calendar/calendar.module";
import { TodoWidgetComponent } from './todo-widget/todo-widget.component';
import { TodoListComponent } from './todo-widget/todo-list.component';
import { FlotChartModule } from "../../shared/graphs/flot-chart/flot-chart.module";
import { D3Module } from "../../shared/graphs/d3/d3.module";
//import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import { ChartModule } from 'angular-highcharts';

declare var require: any;

export function highchartsFactory() {
  const hc = require('highcharts');
  const dd = require('highcharts/modules/drilldown');
  dd(hc);

  return hc;
}

@NgModule({
  imports: [
    SmartadminModule,
    AnalyticsRoutingModule,
    ReactiveFormsModule,
    CalendarModule,
    FlotChartModule,
    D3Module,
    ChartModule
  ],
  declarations: [
    AnalyticsComponent,

    LiveFeedsComponent,
    LiveStatsComponent,
    RevenueComponent,
    SocialNetworkComponent,

    BirdEyeComponent,

    TodoWidgetComponent,

    TodoListComponent
  ],
  providers: [
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    }
  ],
})
export class AnalyticsModule {

}

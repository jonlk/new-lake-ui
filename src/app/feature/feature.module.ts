import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CacheComponent } from './cache/cache.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { DataComponent } from './data/data.component';
import { QueueComponent } from './queue/queue.component';

@NgModule({
  declarations: [
    CacheComponent,
    DataComponent,
    QueueComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule
  ]
})
export class FeatureModule { }
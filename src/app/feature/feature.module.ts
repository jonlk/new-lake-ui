import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRoutingModule } from './feature-routing.module';

// biz
import { CacheComponent } from './cache/cache.component';
import { DataComponent } from './data/data.component';
import { QueueComponent } from './queue/queue.component';

// material
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    CacheComponent,
    DataComponent,
    QueueComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    MatGridListModule,
    MatButtonModule
  ]
})
export class FeatureModule { }

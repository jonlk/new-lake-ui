import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { CacheComponent } from './cache/cache.component';
import { DataComponent } from './data/data.component';
import { QueueComponent } from './queue/queue.component';

const routes: Routes = [
  { path: 'cache', component: CacheComponent },
  { path: 'data', component: DataComponent },
  { path: 'queue', component: QueueComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OverviewComponent} from './overview/overview.component';
import {CreateObjectComponent} from './create-object/create-object.component';
import {ReadObjectComponent} from './read-object/read-object.component';
import {DetailViewOrderComponent} from './detail-view-order/detail-view-order.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {UpsertObjectComponent} from './upsert-object/upsert-object.component';


const routes: Routes = [{path: '', component: OverviewComponent },
  {path: 'order', component: CreateObjectComponent},
  {path: 'allorders', component: ReadObjectComponent},
  {path: 'detailorder/:orderId', component: DetailViewOrderComponent},
  {path: 'order/update', component: UpsertObjectComponent},
  { path: '**', component: PageNotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

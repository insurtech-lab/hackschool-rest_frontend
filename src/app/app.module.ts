import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverviewComponent } from './overview/overview.component';
import { ReadObjectComponent } from './read-object/read-object.component';
import { CreateObjectComponent } from './create-object/create-object.component';
import { UpsertObjectComponent } from './upsert-object/upsert-object.component';
import { DetailViewOrderComponent } from './detail-view-order/detail-view-order.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatTableModule, MatToolbarModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    ReadObjectComponent,
    CreateObjectComponent,
    UpsertObjectComponent,
    DetailViewOrderComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

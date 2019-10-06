import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverviewComponent } from './overview/overview.component';
import { ReadObjectComponent } from './read-object/read-object.component';
import { CreateObjectComponent } from './create-object/create-object.component';
import { UpsertObjectComponent } from './upsert-object/upsert-object.component';
import { DeleteObjectComponent } from './delete-object/delete-object.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    ReadObjectComponent,
    CreateObjectComponent,
    UpsertObjectComponent,
    DeleteObjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

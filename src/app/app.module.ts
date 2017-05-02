import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { UserDetailComponent } from './user-detail.component';
import { Service } from './app.service';
import { DxListModule, DxTemplateModule, DxDataGridModule } from 'devextreme-angular';

@NgModule({
  imports: [
    BrowserModule,
    DxListModule,
    DxTemplateModule,
    DxDataGridModule
  ],
  declarations: [
    AppComponent,
    UserDetailComponent
  ],
  providers: [Service],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
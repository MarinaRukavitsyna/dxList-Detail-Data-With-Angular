import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { UserDetailComponent } from './components/user-detail.component';
import { DxListModule, DxTemplateModule, DxDataGridModule } from 'devextreme-angular';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    DxListModule,
    DxTemplateModule,
    DxDataGridModule
  ],
  declarations: [
    AppComponent,
    UserDetailComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
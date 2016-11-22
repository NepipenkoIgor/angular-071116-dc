import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {DefaultComponent} from './default/default.component';
import {OnPushComponent} from './on-push/on-push.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    OnPushComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  entryComponents: [DefaultComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}

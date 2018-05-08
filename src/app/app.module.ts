import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CriarAlertaComponent } from './criar-alerta/criar-alerta.component';


@NgModule({
  declarations: [
    AppComponent,
    CriarAlertaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

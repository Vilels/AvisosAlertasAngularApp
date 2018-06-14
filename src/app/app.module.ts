import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';


import { AppComponent } from './app.component';
import { CriarAlertaComponent } from './criar-alerta/criar-alerta.component';
import { EmailService } from './email.service';
import { NotificationService } from './notification.service';
import { AppRoutingModule } from './/app-routing.module';
import { TipologiaProgramadaComponent } from './tipologias/tipologia-programada.component';
import { TipologiaNaoProgramadaComponent } from './tipologias/tipologia-nao-programada.component';
import { Ocorrencia1ProgramadaComponent } from './ocorrencias/ocorrencia1-programada.component';
import { Ocorrencia2ProgramadaComponent } from './ocorrencias/ocorrencia2-programada.component';
import { Ocorrencia3ProgramadaComponent } from './ocorrencias/ocorrencia3-programada.component';
import { Ocorrencia1NaoProgramadaComponent } from './ocorrencias/ocorrencia1-nao-programada.component';
import { Ocorrencia2NaoProgramadaComponent } from './ocorrencias/ocorrencia2-nao-programada.component';
import { Ocorrencia3NaoProgramadaComponent } from './ocorrencias/ocorrencia3-nao-programada.component';
import { Ocorrencia4NaoProgramadaComponent } from './ocorrencias/ocorrencia4-nao-programada.component';
import { Ocorrencia5NaoProgramadaComponent } from './ocorrencias/ocorrencia5-nao-programada.component';


@NgModule({
  declarations: [
    AppComponent,
    CriarAlertaComponent,
    TipologiaProgramadaComponent,
    TipologiaNaoProgramadaComponent,
    Ocorrencia1ProgramadaComponent,
    Ocorrencia2ProgramadaComponent,
    Ocorrencia3ProgramadaComponent,
    Ocorrencia1NaoProgramadaComponent,
    Ocorrencia2NaoProgramadaComponent,
    Ocorrencia3NaoProgramadaComponent,
    Ocorrencia4NaoProgramadaComponent,
    Ocorrencia5NaoProgramadaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [EmailService, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

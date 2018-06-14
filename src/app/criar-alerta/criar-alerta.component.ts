import { Component, OnInit } from '@angular/core';
import {EmailService, IMessage} from '../email.service';
import {NotificationService} from '../notification.service';
import {Conteudo} from '../conteudo'

@Component({
  selector: 'app-criar-alerta',
  templateUrl: './criar-alerta.component.html',
  styleUrls: ['./criar-alerta.component.css']
})
export class CriarAlertaComponent implements OnInit {

//Escolha da programação
private valorProg: string="";

setProg(p: string): void{
  this.valorProg = p;
  this.valorTipologia="";
  this.valorOcorrencia="";
}

prog(tipoP: string): boolean{
  if (!this.valorProg){
    return false;
  } return (this.valorProg===tipoP);
}

//Escolha da tipologia
private valorTipologia: string="";

setTipologia(t: string): void{
  this.valorTipologia = t;
  this.valorOcorrencia="";
}

tipologia(tipoT: string): boolean{
  if (!this.valorTipologia){
    return false;
  } return (this.valorTipologia===tipoT);
}

//Escolha da ocorrencia
private valorOcorrencia: string="";

setOcorrencia(o: string): void{
  this.valorOcorrencia = o;
}

ocorrencia(tipoO: string): boolean{
  if(!this.valorOcorrencia){
    return false;
  } return (this.valorOcorrencia===tipoO);
}

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
  }

  message: IMessage = {
    txt: 'Some example txt message2',
  };

  sendNotification(title: string, body: string) {
    this.notificationService.sendNotification({title, body} as Conteudo)
    .subscribe(conteudo => {
    }, error => {
      console.log('CriarAlertaComponent Error', error);
    })
  }

}

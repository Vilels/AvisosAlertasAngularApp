import { Component, OnInit } from '@angular/core';
import {EmailService, IMessage} from '../email.service';

@Component({
  selector: 'app-criar-alerta',
  templateUrl: './criar-alerta.component.html',
  styleUrls: ['./criar-alerta.component.css']
})
export class CriarAlertaComponent implements OnInit {


  constructor(private emailService: EmailService) { }

  ngOnInit() {
  }

  message: IMessage = {
    txt: 'Some example txt message',
  };

  sendEmail(message: IMessage) {
    this.emailService.sendEmail(message).subscribe(res => {
    }, error => {
      console.log('CriarAlertaComponent Error', error);
    })
  }

}

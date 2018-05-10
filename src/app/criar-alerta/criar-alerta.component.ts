import { Component, OnInit } from '@angular/core';
import {EmailService, Message} from '../email.service';

@Component({
  selector: 'app-criar-alerta',
  templateUrl: './criar-alerta.component.html',
  styleUrls: ['./criar-alerta.component.css']
})
export class CriarAlertaComponent implements OnInit {


  constructor(private emailService: EmailService) { }

  ngOnInit() {
  }

  sendEmail(message: Message) {
    this.emailService.sendEmail(message).subscribe(res => {
      
    }, error => {
      console.log('CriarAlertaComponent Error', error);
    })
  }

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Conteudo} from './conteudo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable()
export class NotificationService {

  constructor(private http: HttpClient) { }

  sendNotification(conteudo: Conteudo) {
  	return this.http.post('http://localhost:8000/alert', conteudo, httpOptions);
  }

}

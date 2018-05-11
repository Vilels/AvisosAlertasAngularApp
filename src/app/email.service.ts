import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

export interface IMessage {
	txt: string;
}

@Injectable()
export class EmailService {

  constructor(private http: HttpClient) { }

  sendEmail(message: IMessage): Observable<IMessage> {
  	return this.http.post<IMessage>('http://localhost:8000/mail', message);
  }

}

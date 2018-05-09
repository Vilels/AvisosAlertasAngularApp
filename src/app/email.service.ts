import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

export interface Message {
	txt: string;
}

@Injectable()
export class EmailService {

  constructor(private http: HttpClient) { }

  sendEmail(message: Message): Observable<Message> {
  	return this.http.post<Message>('http://localhost:8000/mail', message);
  }

}

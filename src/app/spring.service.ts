import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Message} from './models/Message';

@Injectable({
  providedIn: 'root'
})
export class SpringService {

  url = 'http://localhost:3000/messages';

  constructor(private httpClient: HttpClient) { }

  public getMessage(): Observable<Message[]> {
    return this.httpClient.get<Message[]>(this.url)
      .pipe(
        map(message => message));
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  AUTH_SERVER_ADDRESS:  string  =  'http://blindstick.herokuapp.com/api/auth/';

  constructor(private httpClient: HttpClient) { }

  login(url, userData): Observable<any> {
    return this.httpClient.post(`${this.AUTH_SERVER_ADDRESS}${url}`, userData, { headers: { 'Content-Type': 'application/json' } });
  }
}

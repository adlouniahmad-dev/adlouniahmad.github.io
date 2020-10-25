import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
  }

  send(name: string, email: string, message: string): Observable<any> {
    return this.http.post('https://getform.io/f/c609d121-46a0-489a-a3ed-c5dea446f4c1', {
      name: name,
      email: email,
      message: message
    }, {
      headers: this.headers
    })
  }
}

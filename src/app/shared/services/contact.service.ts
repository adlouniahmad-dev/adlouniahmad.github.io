import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) {
  }

  send(name: string, email: string, message: string): Observable<any> {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    return this.http.post('https://getform.io/f/c609d121-46a0-489a-a3ed-c5dea446f4c1', formData, {
      responseType: 'text'
    });
  }
}

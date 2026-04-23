import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Passport {
  passportId?: number;
  holderName: string;
  email: string;
  phoneNumber: string;
  expirationDate: string;
}

@Injectable({
  providedIn: 'root',
})

export class PassportServices {
  private apiUrl = 'http://localhost:5168/api/Passport';
  constructor(private http: HttpClient) {}
  
  getAll(): Observable<Passport[]>{
    return this.http.get<Passport[]>(`${this.apiUrl}/all`)
  }
  create(passport: Passport): Observable<Passport> {
    return this.http.post<Passport>(this.apiUrl, passport);
  }
  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  getById(id: number): Observable<Passport>{
    return this.http.get<Passport>(`${this.apiUrl}/${id}`);
  }
  update(id: number, passport: Passport): Observable<Passport> {
    return this.http.put<Passport>(`${this.apiUrl}/${id}`, passport);
  }
}
